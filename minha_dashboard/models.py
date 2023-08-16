from django.db import models
from typing import ClassVar
from django.db import models
from datetime import datetime
#import datetime
class Produto(models.Model):
    nome = models.CharField(max_length=50)

    class Meta:
        verbose_name = ('Produto')
        verbose_name_plural = ('Produtos')

    def __str__(self) -> str:
        return self.nome

class Vendedor(models.Model):
    nome = models.CharField(max_length=50)

    class Meta:
        verbose_name = ('Vendedor')
        verbose_name_plural = ('Vendedores')

    def __str__(self) -> str:
        return self.nome

class Vendas(models.Model):
    nome_produto = models.ForeignKey(Produto, on_delete=models.DO_NOTHING)
    vendedor = models.ForeignKey(Vendedor, on_delete=models.DO_NOTHING)
    total = models.FloatField()
    #data = models.DateTimeField(default=datetime.datetime.now())
    data = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.nome_produto.nome

class Despesa(models.Model):
    nome = models.CharField(max_length=100)  # Por exemplo, nome da despesa
    valor = models.FloatField(default=0)  # Valor da despesa
    encargos = models.FloatField(default=0)  # Encargos (impostos, taxas, etc.)
    data = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name = 'Despesa'
        verbose_name_plural = 'Despesas'

    def __str__(self):
        return self.nome

