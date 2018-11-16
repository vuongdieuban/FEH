from django.contrib import admin
from .models import Heroes, HeroMovement, HeroWeapon, HeroStat, HeroType

# Register your models here.
admin.site.register(Heroes)
admin.site.register(HeroType)
admin.site.register(HeroWeapon)
admin.site.register(HeroMovement)
admin.site.register(HeroStat)
