# core/urls.py

from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('login/', views.login_signup_view, name='login_signup'),

    path('login_process/', auth_views.LoginView.as_view(
        template_name='autenticacao/login.html',
        redirect_authenticated_user=True
    ), name='login'),
    path('register/', views.register, name='register'),

   
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]