from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.views.generic import ListView
from django.shortcuts import render, redirect
from .models import Post
from django.contrib.auth.mixins import LoginRequiredMixin
import random
# Create your views here.

class HomePageView( LoginRequiredMixin,TemplateView):
	model = Post
	template_name = 'home.html'
	context_object_name = 'all_posts_list'
	def post(self, request):

		return redirect

class AboutPageView(TemplateView):
	template_name = 'about.html'