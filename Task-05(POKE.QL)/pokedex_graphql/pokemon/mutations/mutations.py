import strawberry

from pokemon.types import PokemonType


@strawberry.input
class pokemonInput:
    name: str
    type: str
    strength: str
    file_name: str
    file_path: str


@strawberry.type
class PokemonMutations:
    @strawberry.mutation
    def create_pokemon(self, info, Input: pokemonInput) -> PokemonType:
        from pokemon.models import pokemon
        add_pokemon = pokemon.objects.create(
            name=Input.name,
            type=Input.type,
            strength=Input.strength,
            file_name=Input.file_name,
            file_path=Input.file_path

        )
        return add_pokemon

    @strawberry.mutation
    def update_pokemon(self, info, pokemonID: strawberry.ID, Input: pokemonInput) -> PokemonType:
        from pokemon.models import pokemon
        update_pokemon = pokemon.objects.get(id=pokemonID)
        update_pokemon.name = Input.name
        update_pokemon.type = Input.type
        update_pokemon.strength = Input.strength
        update_pokemon.file_name = Input.file_name
        update_pokemon.file_path = Input.file_path
        update_pokemon.save()
        return update_pokemon

    @strawberry.mutation
    def delete_pokemon(self, info, Name: str, ID: int) -> PokemonType:
        from pokemon.models import pokemon
        if ID is not None:
            pokemon = pokemon.objects.get(id=ID)
        else:
            pokemon = pokemon.objects.get(name=Name)
        pokemon.delete()
        return pokemon


__all__ = [
    "PokemonMutations"
]
