from django.core.exceptions import ObjectDoesNotExist
from django.core.management.base import BaseCommand, CommandError
from backend.functions import CamaraAPI, APIsDataHandler
from backend.models import Deputado
import traceback


class Command(BaseCommand):
    help = 'Get all "deputados" (in the local db) expenditure from the Camara API and add to the local database.'

    def handle(self, *args, **kwargs):
        # Loop through all partidos gotten from the Camara API
        for deputado in Deputado.objects.all():
            # Get the full data of the especific partido
            despesas_data = CamaraAPI().get_deputado_despesas(deputado.api_id)
            # Create the despesa object for each despesa
            for despesa in despesas_data:
                APIsDataHandler().create_despesa(despesa)
                #TODO
            # Check if the partido is already in the local database, if so, skip to the next
            if Partido.objects.filter(
                api_id=partido["id"]
            ).exists() and partido_obj.is_equal_to(
                Partido.objects.filter(api_id=partido["id"])[0]
            ):
                print(f"Partido {partido_obj.nome} is already in the local database.")
                continue

            # Save the partido object to the local database
            try:
                partido_obj.save()
            except Exception as e:
                print("Error saving partido: " + partido["nome"])
                print("Error: " + str(e))
                print(traceback.format_exc())
