from django.urls import path

from . import views

urlpatterns = [
    path('sites', views.sites, name='sites'),
	path('programs', views.programs, name='programs'),
]

