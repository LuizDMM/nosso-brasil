from django.core.exceptions import ObjectDoesNotExist
from django.core.management.base import BaseCommand, CommandError
from backend.functions import CamaraAPI, APIsDataHandler
from backend.models import Deputado
import traceback


class Command(BaseCommand):
    help = 'Get all "deputados" data from the Camara API and add to the local database.'

    def handle(self, *args, **kwargs):
        # Loop through all deputados gotten from the Camara API
        for deputado in CamaraAPI().gel_all_deputados_data():
            # Get the full data of a specific deputado
            deputado_data = CamaraAPI().get_deputado_data(deputado["id"])
            # Create the Deputado object
            deputado_obj = APIsDataHandler().create_deputado(deputado_data)
            # Check if the deputado is already in the local database, if so, skip it
            if Deputado.objects.filter(
                api_id=deputado["id"]
            ).exists() and deputado_obj.is_equal_to(
                Deputado.objects.filter(api_id=deputado["id"])[0]
            ):
                print(f"Deputado {deputado_obj.nome} is already in the local database.")
                continue

            # Save the deputado object to the local database
            try:
                deputado_obj.save()
            except Exception as e:
                print(f"Error saving deputado: {deputado_obj.nome}")
                print("Error:" + str(e))
                print(traceback.format_exc())
