from rest_framework import serializers
from .models import Heroes, HeroWeapon, HeroMovement, HeroStat


class HeroStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroStat
        fields = ("hp", "attack", "speed", "defense", "resistance")


class HeroesSerializer(serializers.ModelSerializer):
    movement = serializers.StringRelatedField(read_only=True)
    weapon = serializers.StringRelatedField(read_only=True)
    stats = HeroStatSerializer(read_only=True)

    class Meta:
        model = Heroes
        fields = ("id", "name", "movement", "weapon", "stats", "image")


class HeroesSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Heroes
        fields = ("id", "name", "image")


