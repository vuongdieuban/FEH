# Generated by Django 2.1.2 on 2018-11-14 20:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Heroes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('image', models.ImageField(upload_to='images')),
            ],
            options={
                'verbose_name_plural': 'Heroes',
            },
        ),
        migrations.CreateModel(
            name='HeroStat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hp', models.PositiveIntegerField()),
                ('attack', models.PositiveIntegerField()),
                ('speed', models.PositiveIntegerField()),
                ('defense', models.PositiveIntegerField()),
                ('resistance', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='HeroType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weapon', models.CharField(max_length=20)),
                ('movement', models.CharField(max_length=20)),
            ],
        ),
        migrations.AddField(
            model_name='heroes',
            name='stats',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='heroes.HeroStat'),
        ),
        migrations.AddField(
            model_name='heroes',
            name='types',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='heroes.HeroType'),
        ),
    ]