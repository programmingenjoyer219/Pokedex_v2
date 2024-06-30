import Card from "./Card";

export default function CardGallery({ selectedPokemons, getAllPokemons }) {
    if (!selectedPokemons) {
        getAllPokemons();
    }
    return (
        <div id='card-gallery' className="w-full py-6 grid gap-6 items-center justify-items-center justify-center content-center grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                selectedPokemons?.map(pokemon => (
                    <Card key={pokemon.id} data={pokemon} />
                ))
            }
        </div>

    )
}
