from django.contrib import admin

from subtitles.models import Subtitles


# Register your models here.


class SubtitlesAdmin(admin.ModelAdmin):
    pass

admin.site.register(Subtitles, SubtitlesAdmin)