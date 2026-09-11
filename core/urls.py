from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import Sitemap
from django.urls import path, include


class StaticViewSitemap(Sitemap):
    def items(self):
        return ["home"]

    def location(self, item):
        return "/"


sitemaps = {
    "static": StaticViewSitemap,
}


urlpatterns = [
    path("admin/", admin.site.urls),

    path("", include("core.urls")),

    path("contact/", include("contact.urls")),  # اگر اپ contact داری

    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps},
        name="sitemap",
    ),
]