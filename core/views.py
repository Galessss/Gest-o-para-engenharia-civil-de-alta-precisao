from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from .forms import CustomUserCreationForm 


def login_signup_view(request):
    """
    Esta view MOSTRA a página de login/cadastro (quando acessada via GET)
    """
    login_form = AuthenticationForm()
    register_form = CustomUserCreationForm()
    return render(request, 'autenticacao/login.html', {
        'login_form': login_form,
        'register_form': register_form
    })

def register(request):
    """
    Esta view PROCESSA o formulário de registro (quando enviado via POST)
    """
    # Só processa POST
    if request.method == 'POST':
        
        register_form = CustomUserCreationForm(request.POST) 
        
        if register_form.is_valid():
            user = register_form.save()
            login(request, user)
            return redirect('home') # Redireciona para a home após registrar
        else:
        
            login_form = AuthenticationForm() 
            context = {
                'login_form': login_form,
                'register_form': register_form # Este contém os erros
            }
            return render(request, 'autenticacao/login.html', context)
    
    # Se alguém tentar acessar /register/ via GET, apenas mande para a pág. de login
    return redirect('login_signup')

@login_required
def home_view(request):
    return render(request, 'home/index.html')

def login_process_view(request):
    """
    Esta view PROCESSA o formulário de login (quando enviado via POST)
    """
    if request.method == 'POST':
        
        # [CORREÇÃO 1] Usamos AuthenticationForm, não LoginForm
        login_form = AuthenticationForm(request, data=request.POST) 
        
        if login_form.is_valid():
            # Com AuthenticationForm, o usuário é pego assim:
            user = login_form.get_user() 
            login(request, user)
            return redirect('home')
        else:
        
            register_form = CustomUserCreationForm() 
            context = {
                'login_form': login_form, # Este contém os erros
                'register_form': register_form
            }
            return render(request, 'autenticacao/login.html', context)
    
    # Se alguém tentar acessar /login_process/ via GET, mande para a pág. de login
    return redirect('login_signup')