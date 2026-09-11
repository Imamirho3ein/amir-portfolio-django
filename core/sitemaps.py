from django.contrib.sitemaps import Sitemap


class StaticViewSitemap(Sitemap):
    def items(self):
        return ["home"]

    def location(self, item):
        return "/"