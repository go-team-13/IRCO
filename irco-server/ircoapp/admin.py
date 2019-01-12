from django.contrib import admin

from .models import Site
from .models import Program

class SiteAdmin(admin.ModelAdmin):
    list_display = ['name']
    ordering = ['name']


class ProgramAdmin(admin.ModelAdmin):
    list_display = ['name']
    ordering = ['name']


admin.site.register(Site, SiteAdmin)
admin.site.register(Program, ProgramAdmin)
