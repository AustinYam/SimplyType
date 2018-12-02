from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
	email = forms.EmailField()
	username = forms.CharField(widget=forms.Textarea(attrs={'cols': 5, 'rows': 1}))

	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']