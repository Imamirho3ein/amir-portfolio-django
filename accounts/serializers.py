from rest_framework import serializers

from .models import Profile, Experience, Education


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:

        model = Profile

        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):

    class Meta:

        model = Experience

        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):

    class Meta:

        model = Education

        fields = "__all__"