import strawberry
from strawberry import auto
from pokemon.models import models


@strawberry.django.type(models.pokemon)
class PokemonType:
    id: auto
    name: str
    type: str
    strength: str
    file_name: str
    file_path: str


__all__ = [
    "PokemonType"
]
