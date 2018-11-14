from rest_framework import serializers
from .models import Heroes, HeroType, HeroStat


class HeroTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroType
        fields = ("movement", "weapon")


class HeroStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroStat
        fields = ("hp", "attack", "speed", "defense", "resistance")


class HeroesSerializer(serializers.ModelSerializer):
    types = HeroTypeSerializer(many=True)
    stats = HeroStatSerializer(read_only=True)

    class Meta:
        model = Heroes
        fields = ("name", "types", "stats")

