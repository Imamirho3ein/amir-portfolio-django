from django.shortcuts import render

from accounts.models import Profile, Experience, Education
from projects.models import Skill, Project


def home(request):

    profile = Profile.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()

    for project in projects:
        if project.technologies:
            project.tech_list = project.technologies.split()
        else:
            project.tech_list = []

    experiences = Experience.objects.all()
    educations = Education.objects.all()

    context = {
        "profile": profile,
        "skills": skills,
        "projects": projects,
        "experiences": experiences,
        "educations": educations,
    }

    return render(
        request,
        "index.html",
        context
    )