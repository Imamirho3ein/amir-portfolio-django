from django.contrib import admin
from .models import Profile, Experience , Education


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):

    list_display = (
        "full_name",
        "job_title",
    )

    search_fields = (
        "full_name",
        "job_title",
    )


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "job_title",
        "company",
        "start_date",
        "end_date",
        "is_current",
    )
    search_fields = ("job_title", "company")
    ordering = ("-start_date",)
@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "degree",
        "field_of_study",
        "institution",
        "start_date",
        "end_date",
    )
    search_fields = (
        "degree",
        "field_of_study",
        "institution",
    )
    ordering = ("-start_date",)    