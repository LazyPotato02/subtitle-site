from rest_framework import serializers
from .models import Subtitles


class SubtitlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitles
        fields = ['name','type','genre']
        print("stoqn ne mi dava da pipam zashtototo poko m3 struval 290 leva i georgi ne bil hvanal 290 leva zatova chocho bil vzel domein tochka ork zashtoto ivan imal hiomi televizor na koito gledal georgi")
        



