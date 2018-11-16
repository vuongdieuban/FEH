from django.db import models

# Create your models here.
class Heroes(models.Model):
    name = models.CharField(max_length=50, unique=True)
    weapon = models.ForeignKey("HeroWeapon", on_delete=models.CASCADE)
    movement = models.ForeignKey("HeroMovement", on_delete=models.CASCADE)
    stats = models.OneToOneField("HeroStat", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="images")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Heroes"


class HeroWeapon(models.Model):
    weapon = models.CharField(max_length=20)

    def __str__(self):
        return self.weapon


class HeroMovement(models.Model):
    movement = models.CharField(max_length=20)

    def __str__(self):
        return self.movement


class HeroStat(models.Model):
    hp = models.PositiveIntegerField()
    attack = models.PositiveIntegerField()
    speed = models.PositiveIntegerField()
    defense = models.PositiveIntegerField()
    resistance = models.PositiveIntegerField()
