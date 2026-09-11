from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
        "technologies",
    )

    list_filter = (
        "created_at",
    )

    readonly_fields = (
        "image_preview",
    )


    def image_preview(self, obj):

        if obj.image:

            return f'<img src="{obj.image.url}" width="200" />'

        return "No image"


    image_preview.allow_tags = True
    image_preview.short_description = "Preview"