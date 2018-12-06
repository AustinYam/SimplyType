from django import forms
from users.models import Profile

class WpmForm(forms.ModelForm):
	class Meta:
		model = Profile
		fields = ['wpm']
		
