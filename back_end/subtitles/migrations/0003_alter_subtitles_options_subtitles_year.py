# Generated by Django 5.0 on 2024-01-04 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subtitles', '0002_alter_subtitles_genre_alter_subtitles_name_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='subtitles',
            options={'ordering': ['id']},
        ),
        migrations.AddField(
            model_name='subtitles',
            name='year',
            field=models.IntegerField(default=0),
        ),
    ]