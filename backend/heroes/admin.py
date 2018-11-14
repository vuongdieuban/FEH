from django.contrib import admin
from .models import Heroes, HeroType, HeroStat

# Register your models here.
admin.site.register(Heroes)
admin.site.register(HeroType)
admin.site.register(HeroStat)
