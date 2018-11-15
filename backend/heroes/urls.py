from django.urls import path
from .views import HeroesListView, HeroesSummaryListView

app_name = "heroes"

urlpatterns = [
    path("", HeroesListView.as_view(), name="heroes-list"),
    path("summary/", HeroesSummaryListView.as_view(), name="heroes-summary-list")
]
