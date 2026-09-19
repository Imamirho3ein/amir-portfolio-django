from django.db import models


class Profile(models.Model):

    full_name = models.CharField(max_length=100)

    job_title = models.CharField(max_length=150)

    bio = models.TextField()

    email = models.EmailField(
        blank=True,
        null=True
    )

    location = models.CharField(
        max_length=150,
        blank=True,
        null=True
    )

    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    cv_file = models.FileField(
        upload_to="cv/",
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.full_name


class Experience(models.Model):

    job_title = models.CharField(max_length=150)

    company = models.CharField(max_length=150)

    description = models.TextField()

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.job_title} - {self.company}"


class Education(models.Model):

    degree = models.CharField(max_length=150)

    field_of_study = models.CharField(max_length=150)

    institution = models.CharField(max_length=200)

    description = models.TextField(
        blank=True
    )

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    def __str__(self):
        return f"{self.degree} - {self.institution}"