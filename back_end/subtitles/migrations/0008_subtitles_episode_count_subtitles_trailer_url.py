# Generated by Django 5.0 on 2024-04-11 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subtitles', '0007_rename_subtitle_location_subtitles_folder_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='subtitles',
            name='episode_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='subtitles',
            name='trailer_url',
            field=models.CharField(default='null', max_length=255),
        ),
    ]
