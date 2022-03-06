from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DeputadoSerializer, PartidoSerializer
from .models import Deputado, Partido


# Create your views here.
class DeputadoView(viewsets.ReadOnlyModelViewSet):
    serializer_class = DeputadoSerializer

    def get_queryset(self):
        queryset = Deputado.objects.all()
        api_id = self.request.query_params.get("api_id")
        if api_id is not None:
            queryset = queryset.filter(api_id=api_id)
        return queryset


class PartidoView(viewsets.ReadOnlyModelViewSet):
    serializer_class = PartidoSerializer

    def get_queryset(self):
        queryset = Partido.objects.all()
        api_id = self.request.query_params.get("api_id")
        if api_id is not None:
            queryset = queryset.filter(api_id=api_id)
        return queryset
