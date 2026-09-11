from django.contrib.sitemaps import Sitemap


class StaticViewSitemap(Sitemap):
    priority = 1.0
    changefreq = "weekly"

    def items(self):
        return [
            "home",
        ]

    def location(self, item):
        return "/"