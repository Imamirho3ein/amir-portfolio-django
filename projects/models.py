from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.PositiveIntegerField(
        help_text="Skill level from 0 to 100"
    )

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )
    technologies = models.CharField(
        max_length=300,
        help_text="Example: Python, Django, PostgreSQL"
    )
    github_url = models.URLField(
        blank=True,
        null=True
    )
    demo_url = models.URLField(
        blank=True,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title