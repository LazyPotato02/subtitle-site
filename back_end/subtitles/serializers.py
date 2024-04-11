from rest_framework import serializers
from .models import Subtitles


class SubtitlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitles
        fields = ['id','name','type','genre','year','subtitle_file_name','folder_name','cover_image_location','trailer_url','episode_count']

class SearchSerializer(serializers.Serializer):
    search_query = serializers.CharField(max_length=100)

