from django.urls import path, include
from .views import SubtitlesApiView,SubtitleDetailedView,download_file,subtitleSearchView,YourModelList
from django.conf.urls.static import static
from django.conf import settings
from .sitemaps import SubtitleSitemap
from django.contrib.sitemaps.views import sitemap
sitemaps = {
    'subtitles': SubtitleSitemap,
}

urlpatterns = [
    path('api/', SubtitlesApiView.as_view()),
    path('api/<int:subtitle_id>',SubtitleDetailedView.as_view()),
    path('download/<path:folder_path>/<str:file_name>/', download_file, name='download_file'),
    path('search/', subtitleSearchView.as_view(), name='search-view'),
    path('pagination/', YourModelList.as_view(), name='your_model_list'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

