from django.urls import path

from pokemon.views import graphql

urlpatterns = [
    path('graphql/', graphql, name='graphql'),
]