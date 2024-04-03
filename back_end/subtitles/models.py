from django.db import models


# Model for the subtitle database objects
class Subtitles(models.Model):

    class Meta:
        ordering = ['id']

    name = models.CharField(
        max_length=255,
        blank=False,
        null=False
    )

    genre = models.CharField(
        max_length=255,
        blank=False,
        null=False
    )

    type = models.CharField(
        max_length=255,
        blank=False,
        null=False
    )
    year = models.IntegerField(
        default=0,
        blank=False,
        null=False
    )
    subtitle_file_name = models.CharField(
        default='null',
        max_length=255,
        blank=False,
        null=False
    )
    folder_name = models.CharField(
        default='null',
        max_length=255,
        blank=False,
        null=False
    )

    cover_image_location = models.CharField(
        default='null',
        max_length=255,
        blank=False,
        null=False
    )
    def __str__(self):
        return self.name
