from django.shortcuts import render
from rest_framework import generics, mixins
from rest_framework import generics, mixins
from .models import Heroes
from .serializers import HeroesSerializer

# Create your views here.
class HeroesListView(generics.ListAPIView):
    serializer_class = HeroesSerializer
    queryset = Heroes.objects.all()
