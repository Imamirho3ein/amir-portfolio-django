
from rest_framework import generics

from .models import Profile, Experience, Education

from .serializers import (
    ProfileSerializer,
    ExperienceSerializer,
    EducationSerializer,
)


class ProfileListAPIView(generics.ListAPIView):

    queryset = Profile.objects.all()

    serializer_class = ProfileSerializer


class ExperienceListAPIView(generics.ListAPIView):

    queryset = Experience.objects.all()

    serializer_class = ExperienceSerializer


class EducationListAPIView(generics.ListAPIView):

    queryset = Education.objects.all()

    serializer_class = EducationSerializer