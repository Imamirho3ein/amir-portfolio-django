from django.urls import path

from .api import ContactMessageCreateAPIView


urlpatterns = [

    path(
        "api/",
        ContactMessageCreateAPIView.as_view(),
        name="contact-create",
    ),

]