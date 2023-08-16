# Generated by Django 4.2.4 on 2023-08-16 03:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('minha_dashboard', '0002_despesa_alter_produto_options_alter_vendedor_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='despesa',
            name='data',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='vendas',
            name='data',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]