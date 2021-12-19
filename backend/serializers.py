from rest_framework import serializers
from .models import Partido, Deputado, Despesa


class PartidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partido
        fields = '__all__'


class DeputadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deputado
        fields = '__all__'


class DespesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Despesa
        fields = '__all__'
