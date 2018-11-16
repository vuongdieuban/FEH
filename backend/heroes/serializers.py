from rest_framework import serializers
from .models import Heroes, HeroWeapon, HeroMovement, HeroStat, HeroType


class HeroTypeSerializer(serializers.ModelSerializer):
    movement = serializers.StringRelatedField(read_only=True)
    weapon = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = HeroType
        fields = ("movement", "weapon")


class HeroStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroStat
        fields = ("hp", "attack", "speed", "defense", "resistance")


class HeroesSerializer(serializers.ModelSerializer):
    stats = HeroStatSerializer(read_only=True)
    type = HeroTypeSerializer(read_only=True)

    class Meta:
        model = Heroes
        fields = ("id", "name", "type", "stats", "image")


class HeroesSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Heroes
        fields = ("id", "name", "image")


