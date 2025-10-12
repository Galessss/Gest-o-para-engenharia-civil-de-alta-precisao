# core/urls.py

from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import RedirectView


urlpatterns = [
    # 1. A URL que MOSTRA a página de login/cadastro
    # Aponta para a sua view 'login_signup_view' em core/views.py
    path('login/', views.login_signup_view, name='login_signup'),

    # 2. A URL que PROCESSA os dados do formulário de login
    # Usa a view pronta do Django, mas aponta para o nosso template customizado
    path('login_process/', auth_views.LoginView.as_view(
        template_name='autenticacao/login.html',
        redirect_authenticated_user=True
    ), name='login'),

    # 3. A URL que PROCESSA o registro de um novo usuário
    # Aponta para a view 'register' que criamos em core/views.py
    path('register/', views.register, name='register'),
    
    # 4. A URL para fazer logout
    # Usa a view pronta do Django
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]