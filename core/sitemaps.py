from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from core.sitemaps import StaticViewSitemap

class StaticViewSitemap(Sitemap):

    priority = 1.0

    changefreq = "weekly"


    def items(self):

        return [
            "home",
            "contact",
        ]


    def location(self, item):

        return reverse(item)