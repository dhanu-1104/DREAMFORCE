import strawberry
from typing import List

from pokemon.models import pokemon
from pokemon.mutations import PokemonMutations
from pokemon.types import PokemonType


@strawberry.type
class PokemonQuery:
    @strawberry.field
    def pokemon(self, info) -> List[PokemonType]:
        List_pokemon = pokemon.objects.all()
        return List_pokemon


Queries = PokemonQuery

Mutations = PokemonMutations

schema = strawberry.Schema(query=Queries, mutation=Mutations)

__all__ = ["schema", "Queries"]
