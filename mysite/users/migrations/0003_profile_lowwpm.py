# Generated by Django 2.0.3 on 2018-12-06 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_wpm'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='lowwpm',
            field=models.IntegerField(default=0),
        ),
    ]