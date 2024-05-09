from django.contrib.sitemaps import Sitemap
from django.contrib.sites.models import Site
from .models import Subtitles  # Ensure this is your correct model import

class SubtitleSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.6

    def items(self):
        return Subtitles.objects.all()

    def location(self, obj):
        return f'/subtitles/{obj.id}'

    def get_urls(self, site=None, **kwargs):
        site = Site(domain='allthesubs.com', name='allthesubs.com')
        return super(SubtitleSitemap, self).get_urls(site=site, **kwargs)
