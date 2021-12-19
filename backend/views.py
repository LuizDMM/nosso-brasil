from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DeputadoSerializer, DespesaSerializer, PartidoSerializer
from .models import Deputado, Despesa, Partido


# Create your views here.
class DeputadoView(viewsets.ReadOnlyModelViewSet):
    serializer_class = DeputadoSerializer
    queryset = Deputado.objects.all()


class DespesaView(viewsets.ReadOnlyModelViewSet):
    serializer_class = DespesaSerializer
    queryset = Despesa.objects.all()


class PartidoView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PartidoSerializer
    queryset = Partido.objects.all()
