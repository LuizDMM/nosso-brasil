from django.db import models

# Create your models here.
class Partido(models.Model):
    api_id = models.IntegerField()
    api_url = models.URLField()
    sigla = models.CharField(max_length=300)
    nome = models.CharField(max_length=300)
    lider = models.CharField(max_length=300)
    logo = models.ImageField()

    def __str__(self):
        return self.nome


class Deputado(models.Model):
    api_id = models.IntegerField()
    api_url = models.URLField()
    nome = models.CharField(max_length=300)
    nome_civil = models.CharField(max_length=300)
    partido = models.ForeignKey('Partido', on_delete=models.CASCADE)
    sigla_uf = models.CharField(max_length=2)
    email = models.EmailField()
    situacao = models.CharField(max_length=300)
    condicao_eleitoral = models.CharField(max_length=300)
    cpf = models.CharField(max_length=11)
    sexo = models.CharField(max_length=1)
    website = models.URLField(null=True, blank=True)
    data_nascimento = models.DateField()
    data_falecimento = models.DateField(null=True, blank=True)
    uf_nascimento = models.CharField(max_length=2)
    municipio_nascimento = models.CharField(max_length=300)
    escolaridade = models.CharField(max_length=300)
    foto = models.ImageField()

    def __str__(self):
        return self.nome


class Despesa(models.Model):
    deputado = models.ForeignKey('Deputado', on_delete=models.CASCADE)
    tipo_despesa = models.TextField()
    cod_documento = models.IntegerField()
    data_documento = models.DateField()
    num_documento = models.CharField(max_length=300)
    url_documento = models.URLField()
    nome_fornecedor = models.CharField(max_length=300)
    valor_liquido = models.FloatField()

    def __str__(self):
        return self.tipo_despesa

