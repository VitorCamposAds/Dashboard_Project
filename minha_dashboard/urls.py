from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
    path('', views.home, name="home"),
    path('retorna_total_vendido', views.retorna_total_vendido, name="retorna_total_vendido"),
    path('relatorio_faturamento', views.relatorio_faturamento, name="relatorio_faturamento"),
    path('relatorio_produtos', views.relatorio_produtos, name="relatorio_produtos"),
    path('relatorio_funcionario', views.relatorio_funcionario, name="relatorio_funcionario"),
    path('renderiza_despesas', views.renderiza_despesas, name="renderiza_despesas")
]

admin.site.index_title = 'Projeto Dashboard'
admin.site.site_header = 'Administração do Projeto-Dashboard-Vitor'
admin.site.site_title = 'Administração do Site'