from rest_framework import serializers
from .models import Subtitles


class SubtitlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitles
        fields = ['name','type','genre']
