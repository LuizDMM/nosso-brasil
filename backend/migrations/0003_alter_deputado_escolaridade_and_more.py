# Generated by Django 4.0 on 2021-12-28 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_alter_partido_lider'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deputado',
            name='escolaridade',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='deputado',
            name='uf_nascimento',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
    ]
