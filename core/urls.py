# Em core/urls.py

from django.urls import path
from django.contrib.auth import views as auth_views
from . import forms
from .home_views import home_view, logout_view 
from . import views

urlpatterns = [
    
    path('login/', views.login_signup_view, name='login_signup'),
    
    path('', home_view, name='home'),
    
    path('register/', views.register, name='register'),
    
    path('login_process/', views.login_process_view, name='login'),
    
    path('salvar-localizacao/', views.salvar_localizacao, name='salvar_localizacao'),
    
    path('logout/', logout_view, name='logout'),
]