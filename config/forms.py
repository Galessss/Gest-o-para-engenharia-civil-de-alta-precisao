from django import forms

class RegisterForm(forms.Form): # Ou pode ser forms.ModelForm
    # É AQUI QUE VOCÊ EDITA OS CAMPOS
    primeiro_nome = forms.CharField(max_length=100)
    ultimo_nome = forms.CharField(max_length=100)
    email = forms.EmailField()
    senha = forms.CharField(widget=forms.PasswordInput)
    confirmar_senha = forms.CharField(widget=forms.PasswordInput)
    
 
class RegisterForm(forms.Form):
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'minha-classe-css', 'placeholder': 'Digite seu e-mail'})
    )
    senha = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'minha-classe-css', 'placeholder': 'Digite sua senha'})
    )