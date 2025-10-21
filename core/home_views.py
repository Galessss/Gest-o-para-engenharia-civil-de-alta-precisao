from django.shortcuts import render, redirect
from django.contrib.auth import login , logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import login_required

@login_required
def home_view(request):
    return render(request, 'home/index.html')
def logout_view(request):
    logout(request)
    # Redireciona para a página inicial após o logout
    return redirect('login')