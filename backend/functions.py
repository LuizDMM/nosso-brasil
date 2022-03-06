import json
import requests
from .models import Partido, Deputado, Despesa
from requests.compat import urljoin


class CamaraAPI:
    # Set the variables
    def __init__(self):
        self.URL = "https://dadosabertos.camara.leg.br/api/v2/"
        self.session = requests.Session()

    # Get a list of all the 'deputados'
    def get_deputados_list(self):
        # Make the data request to the API and return the data
        return self.session.get(urljoin(self.URL, "deputados")).json()["dados"]

    # Get all data from a specific 'deputado'
    def get_deputado_data(self, deputado_id):
        # Make the data request to the API and return the data
        return self.session.get(urljoin(self.URL, f"deputados/{deputado_id}")).json()[
            "dados"
        ]

    # Get all despesas from specific deputado from the last six months
    def get_deputado_despesas(self, deputado_id):
        link = urljoin(
            self.URL,
            f"deputados/{deputado_id}/despesas?ordem=desc&ordenarPor=dataDocumento",
        )
        next_page = True
        data_to_return = []
        while next_page:
            response = self.session.get(link)
            data_to_return.extend(response.json())
            if response.links.get("next"):
                link = response.links["next"]["url"]
            else:
                next_page = False
        return data_to_return

    # Get all data from all 'deputados'
    # ATENTION: THIS FUNCTIONS IS VERY SLOW BECAUSE OF THE CAMERA API LATENCY
    def gel_all_deputados_data(self):
        data_to_return = []
        for deputado in self.get_deputados_list():
            deputado_data = self.get_deputado_data(deputado["id"])
            data_to_return.append(deputado_data)
        return data_to_return

    # Get a list of all 'partidos' (parties)
    def get_partidos_list(self):
        link = urljoin(self.URL, "partidos")
        next_page = True
        data_to_return = []
        while next_page:
            response = self.session.get(link)
            data_to_return.extend(response.json()["dados"])
            if response.links.get("next"):
                link = response.links["next"]["url"]
            else:
                next_page = False
        return data_to_return

    # Get all data from a specific 'partido'
    def get_partido_data(self, partido_id):
        data_to_return = self.session.get(
            urljoin(self.URL, f"partidos/{partido_id}")
        ).json()
        return data_to_return["dados"]

    # Get all data from all 'partidos'
    # ATENTION: THIS FUNCTIONS IS VERY SLOW BECAUSE OF THE CAMERA API LATENCY
    def get_all_partidos_data(self):
        data_to_return = []
        for partido in self.get_partidos_list():
            partido_data = self.get_partido_data(partido["id"])
            data_to_return.append(partido_data)
        return data_to_return


class APIsDataHandler:
    # Create "Deputado" object based on the models, from the CameraAPI method response
    def create_deputado(self, deputado):
        return Deputado(
            api_id=deputado["id"],
            nome=deputado["ultimoStatus"]["nome"],
            nome_civil=deputado["nomeCivil"],
            partido=Partido.objects.get(sigla=deputado["ultimoStatus"]["siglaPartido"]),
            sigla_uf=deputado["ultimoStatus"]["siglaUf"],
            email=deputado["ultimoStatus"]["email"],
            situacao=deputado["ultimoStatus"]["situacao"],
            condicao_eleitoral=deputado["ultimoStatus"]["condicaoEleitoral"],
            cpf=deputado["cpf"],
            sexo=deputado["sexo"],
            website=deputado["urlWebsite"],
            data_nascimento=deputado["dataNascimento"],
            data_falecimento=deputado["dataFalecimento"],
            uf_nascimento=deputado["ufNascimento"],
            municipio_nascimento=deputado["municipioNascimento"],
            escolaridade=deputado["escolaridade"],
            foto=deputado["ultimoStatus"]["urlFoto"],
        )
    
    # Create "Partido" object based on the models, from the CameraAPI method response
    def create_partido(self, partido):
        return Partido(
            api_id=partido["id"],
            sigla=partido["sigla"],
            nome=partido["nome"],
            lider=partido["status"]["lider"]["nome"],
            logo=partido["urlLogo"],
        )
