from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DeputadoSerializer, DespesaSerializer, PartidoSerializer
from .models import Deputado, Despesa, Partido


# Create your views here.
class DeputadoView(viewsets.ReadOnlyModelViewSet):
    serializer_class = DeputadoSerializer
    def get_queryset(self):
        queryset = Deputado.objects.all()
        api_id = self.request.query_params.get('api_id')
        if api_id is not None:
            queryset = queryset.filter(api_id=api_id)
        return queryset


class DespesaView(viewsets.ReadOnlyModelViewSet):
    serializer_class = DespesaSerializer
    queryset = Despesa.objects.all()


class PartidoView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PartidoSerializer
    queryset = Partido.objects.all()
