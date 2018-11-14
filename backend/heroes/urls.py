from django.urls import path
from .views import HeroesListView

app_name = "heroes"

urlpatterns = [path("", HeroesListView.as_view(), name="heroes-list")]
