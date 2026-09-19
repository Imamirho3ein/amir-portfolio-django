from rest_framework import generics

from .models import Project, Skill
from .serializers import ProjectSerializer, SkillSerializer


class SkillListAPIView(generics.ListAPIView):

    queryset = Skill.objects.all()

    serializer_class = SkillSerializer


class ProjectListAPIView(generics.ListAPIView):

    queryset = Project.objects.all()

    serializer_class = ProjectSerializer


class ProjectDetailAPIView(generics.RetrieveAPIView):

    queryset = Project.objects.all()

    serializer_class = ProjectSerializer

    lookup_field = "slug"