from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from django.views.static import serve
from rest_framework import routers
from . import views
appname="canvas"
urlpatterns = [
    path("api/get_placements", views.get_placements, name="get_placements"),
    path("api/place", views.place, name="place"),
    path("api/get_canvas",views.get_canvas,name="get_canvas")

]
