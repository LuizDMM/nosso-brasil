from rest_framework import serializers
from .models import Partido, Deputado, Despesa


class PartidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partido
        fields = "__all__"


class DeputadoSerializer(serializers.ModelSerializer):
    partido = serializers.SlugRelatedField(read_only=True, slug_field="sigla")

    class Meta:
        model = Deputado
        fields = (
            "api_id",
            "nome",
            "nome_civil",
            "partido",
            "sigla_uf",
            "email",
            "situacao",
            "condicao_eleitoral",
            "cpf",
            "sexo",
            "website",
            "data_nascimento",
            "data_falecimento",
            "uf_nascimento",
            "municipio_nascimento",
            "escolaridade",
            "foto",
        )


class DespesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Despesa
        fields = "__all__"
