from django.db import models

# Create your models here.
class Partido(models.Model):
    api_id = models.IntegerField()
    sigla = models.CharField(max_length=300, unique=True)
    nome = models.CharField(max_length=300)
    lider = models.CharField(max_length=300, blank=True, null=True)
    logo = models.URLField()

    def __str__(self):
        return self.nome

    def is_equal_to(self, other):
        return (
            self.api_id == other.api_id
            and self.sigla == other.sigla
            and self.nome == other.nome
            and self.lider == other.lider
            and self.logo == other.logo
        )


class Deputado(models.Model):
    api_id = models.IntegerField(unique=True)
    nome = models.CharField(max_length=300)
    nome_civil = models.CharField(max_length=300)
    partido = models.ForeignKey(Partido, related_name='membros', on_delete=models.CASCADE)
    sigla_uf = models.CharField(max_length=2)
    email = models.EmailField()
    situacao = models.CharField(max_length=300)
    condicao_eleitoral = models.CharField(max_length=300)
    cpf = models.CharField(max_length=11)
    sexo = models.CharField(max_length=1)
    website = models.URLField(null=True, blank=True)
    data_nascimento = models.DateField()
    data_falecimento = models.DateField(null=True, blank=True)
    uf_nascimento = models.CharField(max_length=2, null=True, blank=True)
    municipio_nascimento = models.CharField(max_length=300)
    escolaridade = models.CharField(max_length=300, null=True, blank=True)
    foto = models.URLField()

    def __str__(self):
        return self.nome

    def is_equal_to(self, other):
        return(
            self.api_id == other.api_id 
            and self.nome == other.nome
            and self.nome_civil == other.nome_civil
            and self.partido == other.partido
            and self.sigla_uf == other.sigla_uf
            and self.email == other.email
            and self.situacao == other.situacao
            and self.condicao_eleitoral == other.condicao_eleitoral
            and self.cpf == other.cpf
            and self.sexo == other.sexo
            and self.website == other.website
            and self.data_nascimento == other.data_nascimento
            and self.data_falecimento == other.data_falecimento
            and self.uf_nascimento == other.uf_nascimento
            and self.municipio_nascimento == other.municipio_nascimento
            and self.escolaridade == other.escolaridade
            and self.foto == other.foto
        )


class Despesa(models.Model):
    deputado = models.ForeignKey("Deputado", on_delete=models.CASCADE)
    tipo_despesa = models.TextField()
    cod_documento = models.IntegerField(unique=True)
    data_documento = models.DateField()
    num_documento = models.CharField(max_length=300)
    url_documento = models.URLField()
    nome_fornecedor = models.CharField(max_length=300)
    valor_liquido = models.FloatField()

    def __str__(self):
        return self.tipo_despesa
