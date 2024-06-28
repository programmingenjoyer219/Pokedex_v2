import Card from "./Card";

export default function CardGallery({ selectedPokemons }) {
    return (
        <div id='card-gallery' className="p-2 grid gap-4 items-center justify-items-center justify-center content-center grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                selectedPokemons?.map(pokemon => {
                    return <Card key={pokemon.id} data={pokemon} />
                })
            }
        </div>
    )
}
