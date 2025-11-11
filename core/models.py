from django.db import models
from django.contrib.auth.models import User


class Funcionario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    chefe = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='funcionarios')

    def __str__(self):
        return self.user.username

# --- ADICIONE ESTE MODELO ABAIXO ---

class Projeto(models.Model):
    """
    Modelo para armazenar os projetos, obras, ou empreendimentos.
    """
    
    # --- Campos básicos (ajuste conforme sua necessidade) ---
    nome = models.CharField(max_length=200)
    endereco = models.CharField(max_length=255, blank=True, null=True)
    
    STATUS_CHOICES = [
        ('em_andamento', 'Em Andamento'),
        ('finalizado', 'Finalizado'),
        ('em_aberto', 'Em Aberto'),
    ]
    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='em_aberto'
    )
    
    # --- CAMPOS CRÍTICOS PARA O GPS ---
    # Estes campos vão armazenar as coordenadas de cada projeto.
    # Usamos FloatField para números decimais.
    # 'null=True, blank=True' permite que projetos sejam criados sem coordenadas.
    
    latitude = models.FloatField(
        "Latitude",
        null=True, 
        blank=True,
        help_text="Coordenada de Latitude (ex: -10.1838)"
    )
    longitude = models.FloatField(
        "Longitude",
        null=True, 
        blank=True,
        help_text="Coordenada de Longitude (ex: -48.3336)"
    )

    def __str__(self):
        return self.nome