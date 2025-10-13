from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomUserCreationForm # <--- CORRIGIDO AQUI!

def login_signup_view(request):
    login_form = AuthenticationForm()
    register_form = CustomUserCreationForm()
    return render(request, 'autenticacao/login.html', {
        'login_form': login_form,
        'register_form': register_form
    })

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/') 
    else:
        form = CustomUserCreationForm()
    return render(request, 'autenticacao/login.html', {'register_form': form})