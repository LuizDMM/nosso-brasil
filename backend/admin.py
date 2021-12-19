from django.contrib import admin
from .models import Deputado, Despesa, Partido


# Register your models here.
admin.site.register(Deputado)
admin.site.register(Despesa)
admin.site.register(Partido)