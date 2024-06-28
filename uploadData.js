import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase.js';
import { pokemonData } from "./pokemonData.js";

const transformData = (pokemon) => {
    // Transform evolution array
    if (pokemon.evolution && pokemon.evolution.next) {
        pokemon.evolution.next = pokemon.evolution.next.map((evol) => ({
            id: evol[0],
            condition: evol[1]
        }));
    }

    // Transform ability array
    if (pokemon.profile && pokemon.profile.ability) {
        pokemon.profile.ability = pokemon.profile.ability.map((ability) => ({
            name: ability[0],
            hidden: ability[1]
        }));
    }

    return pokemon;
};

const uploadPokemonData = async () => {
    const pokemonsCollection = collection(db, "pokemons");

    try {
        for (const pokemon of pokemonData) {
            const transformedPokemon = transformData(pokemon);
            await addDoc(pokemonsCollection, transformedPokemon);
            console.log(`Uploaded ${pokemon.name.english}`);
        }
        console.log("All Pokémon data uploaded successfully!");
    } catch (error) {
        console.error("Error uploading Pokémon data: ", error);
    }
};

uploadPokemonData();