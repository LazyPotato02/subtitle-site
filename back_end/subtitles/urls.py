from django.urls import path, include
from .views import SubtitlesApiView

urlpatterns = [
    path('api/', SubtitlesApiView.as_view())
]