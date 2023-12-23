from django.db import models


# Model for the subtitle database objects
class Subtitles(models.Model):
    name = models.CharField(
        max_length = 255,
        blank=False,
        null=False
    )

    genre = models.CharField(
        max_length = 255,
        blank=False,
        null=False
    )

    type = models.CharField(
        max_length = 255,
        blank=False,
        null=False
    )
