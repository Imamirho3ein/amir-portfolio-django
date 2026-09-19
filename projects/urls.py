from django.urls import path

from .api import (
    SkillListAPIView,
    ProjectListAPIView,
    ProjectDetailAPIView,
)


urlpatterns = [

    path(
        "skills/",
        SkillListAPIView.as_view(),
        name="skill-list",
    ),

    path(
        "projects/",
        ProjectListAPIView.as_view(),
        name="project-list",
    ),

    path(
        "projects/<slug:slug>/",
        ProjectDetailAPIView.as_view(),
        name="project-detail",
    ),

]