from django.http import HttpResponse
from django.core import serializers
from .models import Site, Program


def sites(request):
    objs = Site.objects.all()
    data = serializers.serialize('json', objs)
    return HttpResponse(data, content_type='application/json')


def programs(request):
    objs = Program.objects.all()
    data = serializers.serialize('json', objs)
    return HttpResponse(data, content_type='application/json')


