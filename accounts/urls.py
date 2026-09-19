from django.urls import path

from .api import (
    ProfileListAPIView,
    ExperienceListAPIView,
    EducationListAPIView,
)


urlpatterns = [

    path(
        "profile/",
        ProfileListAPIView.as_view(),
        name="profile-list",
    ),

    path(
        "experience/",
        ExperienceListAPIView.as_view(),
        name="experience-list",
    ),

    path(
        "education/",
        EducationListAPIView.as_view(),
        name="education-list",
    ),

]