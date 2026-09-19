from django.contrib import admin

from .models import Project



@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):


    list_display = (
        "title",
        "project_type",
        "created_at",
    )


    search_fields = (
        "title",
        "technologies",
        "project_type",
    )


    list_filter = (
        "created_at",
        "project_type",
    )


    readonly_fields = (
        "created_at",
    )


    fieldsets = (

        (
            "Basic Information",
            {
                "fields": (
                    "title",
                    "description",
                    "short_description",
                    "image",
                )
            }
        ),


        (
            "Project Details",
            {
                "fields": (
                    "full_description",
                    "features",
                    "challenges",
                    "project_type",
                )
            }
        ),


        (
            "Technology & Links",
            {
                "fields": (
                    "technologies",
                    "github_url",
                    "demo_url",
                )
            }
        ),


        (
            "Metadata",
            {
                "fields": (
                    "created_at",
                )
            }
        ),

    )