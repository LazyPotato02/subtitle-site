from django.urls import path, include
from .views import SubtitlesApiView,SubtitleDetailedView

urlpatterns = [
    path('api/', SubtitlesApiView.as_view()),
    path('api/<int:subtitle_id>',SubtitleDetailedView.as_view())
]