# Em forms.py (que está na pasta 'core')

from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

# ESTE É O FORMULÁRIO DE CADASTRO QUE VOCÊ PRECISA ADICIONAR
class CustomUserCreationForm(UserCreationForm):
    
    email = forms.EmailField(required=True, label="Email")

    class Meta(UserCreationForm.Meta):
        model = User
        # Define os campos que você quer pedir (além de senha)
        fields = ('username', 'email') 


# Você também precisa de um formulário de Login.
# Adicione este também, já que seu views.py está importando ele.
class LoginForm(AuthenticationForm):
    
    # Você pode customizar os campos aqui se quiser, 
    # mas o padrão já funciona (username e password)
    
    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        # Opcional: Adiciona placeholders ou classes CSS
        self.fields['username'].widget.attrs.update(
            {'placeholder': 'Nome de usuário', 'class': 'form-control'}
        )
        self.fields['password'].widget.attrs.update(
            {'placeholder': 'Senha', 'class': 'form-control'}
        )