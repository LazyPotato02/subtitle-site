from django.db import models


# Model for the subtitle database objects
class Subtitles(models.Model):
    name = models.CharField(
        blank=False,
        null=False
    )

    genre = models.CharField(
        blank=False,
        null=False
    )

    type = models.CharField(
        blank=False,
        null=False
    )
