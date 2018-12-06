from django.db import models
from django.contrib.auth.models import User
from django.db.models import Avg

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	image = models.ImageField(default='default.jpg', upload_to='profile_pics')
	wpm = models.IntegerField(default=0)
	low_wpm = models.IntegerField(default=0)
	high_wpm = models.IntegerField(default=0)

	def __str__(self):
		return f'{self.user.username} Profile'





		


