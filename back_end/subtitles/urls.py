from django.urls import path, include
from .views import SubtitlesApiView,SubtitleDetailedView,download_file,subtitleSearchView
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('api/', SubtitlesApiView.as_view()),
    path('api/<int:subtitle_id>',SubtitleDetailedView.as_view()),
    path('download/<path:folder_path>/<str:file_name>/', download_file, name='download_file'),
    path('search/', subtitleSearchView.as_view(), name='search-view')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)