from django.contrib.sitemaps.views import sitemap
from django.urls import path
from django.contrib.sitemaps import Sitemap
from django.views.generic import TemplateView


class StaticViewSitemap(Sitemap):
    def items(self):
        return ["home"]

    def location(self, item):
        return "/"


sitemaps = {
    "static": StaticViewSitemap,
}


urlpatterns = [
    # مسیرهای قبلی

    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps},
        name="sitemap",
    ),
]