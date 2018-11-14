from django.shortcuts import render
from django.db.models import Q
from rest_framework import generics, mixins
from .models import Heroes
from .serializers import HeroesSerializer

# Create your views here.
class HeroesListView(generics.ListCreateAPIView):
    serializer_class = HeroesSerializer
    queryset = Heroes.objects.all()

    # endpoint for this is http://127.0.0.1:8000/api/?q=<look_up>
    def get_queryset(self):
        qs = Heroes.objects.all()
        query = self.request.GET.get("q")
        if query is not None:
            qs = qs.filter(
                Q(name__icontains=query)
                | Q(types__weapon__icontains=query)
                | Q(types__movement__icontains=query)
            ).distinct()
        return qs
