from django.db import models
from django.utils.text import slugify

class Skill(models.Model):

    name = models.CharField(
        max_length=100
    )

    percentage = models.PositiveIntegerField(
        help_text="Skill level from 0 to 100"
    )


    def __str__(self):
        return self.name

        
class Project(models.Model):

    title = models.CharField(max_length=200)

    description = models.TextField()

    slug = models.SlugField(
        blank=True,
        null=True
    )

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    technologies = models.CharField(
        max_length=300,
        help_text="Example: Python Django PostgreSQL"
    )

    github_url = models.URLField(
        blank=True,
        null=True
    )

    demo_url = models.URLField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


    short_description = models.CharField(
        max_length=300,
        blank=True
    )


    full_description = models.TextField(
        blank=True
    )


    features = models.TextField(
        blank=True
    )


    challenges = models.TextField(
        blank=True
    )


    project_type = models.CharField(
        max_length=100,
        blank=True
    )



    def save(self, *args, **kwargs):

        if not self.slug:

            self.slug = slugify(self.title)

        super().save(*args, **kwargs)



    def __str__(self):

        return self.title