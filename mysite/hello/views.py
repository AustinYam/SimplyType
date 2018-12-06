from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView, FormView 
from django.views.generic import ListView
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Post
from .forms import WpmForm
from django.contrib.auth.mixins import LoginRequiredMixin
import random
# Create your views here.

class HomePageView( LoginRequiredMixin,FormView):
	model = Post
	template_name = 'home.html'
	context_object_name = 'all_posts_list'
	form_class = WpmForm 
	






class AboutPageView(TemplateView):
	template_name = 'about.html'