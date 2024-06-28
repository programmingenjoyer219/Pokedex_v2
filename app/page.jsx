"use client"
import SearchBox from "@/components/SearchBox";
import CardGallery from "@/components/CardGallery";
import { useState, useEffect } from "react";

import axios from "axios";
import useSWR from "swr";

// import { getDocs, orderBy, query, where } from "firebase/firestore";
// import { collRef } from "@/firebase";

const axiosInstance = axios.create({ baseURL: '/api' });

async function fetcher(endpoint) {
  try {
    const result = await axiosInstance.get(endpoint);
    return result.data.result;
  } catch (error) {
    console.error(error);
    return { error: error.message }
  }
}

// export default function Home() {
//   const [selectedPokemons, setSelectedPokemons] = useState(null);
//   const [pokemonType, setType] = useState(null);
//   const [pokemonName, setName] = useState(null);
//   const { data: allPokemons, isLoading1, error1 } = useSWR("/all", fetcher, { refreshInterval: 1000 * 60 * 60 });
//   const { data: pokemonsByType, isLoading2, error2 } = useSWR(pokemonType && `/type/${pokemonType}`, fetcher, { refreshInterval: 1000 * 60 * 60 });
//   const { data: pokemonsByName, isLoading3, error3 } = useSWR(pokemonName && `/name/${pokemonName}`, fetcher, { refreshInterval: 1000 * 60 * 60 });

//   function getAllPokemons() {
//     console.log("Getting all the pokemons");
//     if (!isLoading1 && !error1) {
//       setSelectedPokemons(allPokemons);
//     }
//     // const q = query(collRef, orderBy("id", "asc"));
//     // const allPokemons = await getDocs(q)
//     //   .then((snapshot) => {
//     //     let pokemons = []
//     //     snapshot.docs.forEach(doc => {
//     //       pokemons.push({ ...doc.data() })
//     //     })
//     //     return pokemons;
//     //   })
//     //   .catch((error) => {
//     //     console.error(error);
//     //   })
//     // return allPokemons;

//     // let allPokemons = await Pokemon.find({});
//     // return allPokemons;
//   }

//   function getPokemonsByType(type) {
//     console.log("getPokemonsByType: " + type)
//     setType(type);
//     if (!isLoading2 && !error2) {
//       setSelectedPokemons(pokemonsByType);
//     }
//     // const q = query(collRef, where("type", "array-contains", type), orderBy("id", "asc"))
//     // await getDocs(q)
//     //   .then((snapshot) => {
//     //     let pokemons = []
//     //     snapshot.docs.forEach(doc => {
//     //       pokemons.push({ ...doc.data() })
//     //     })
//     //     // if (pokemons.length == 0) { pokemons = getAllPokemons() }
//     //     setSelectedPokemons(pokemons);
//     //   })
//     //   .catch((error) => {
//     //     console.error(error);
//     //   })
//   }

//   function getPokemonsByName(name) {
//     console.log("getPokemonsByName: " + name);
//     setName(name);
//     if (!isLoading3 && !error3) {
//       setSelectedPokemons(pokemonsByName);
//     }
//     // const q = query(collRef, where('name.english', '==', name));
//     // await getDocs(q)
//     //   .then((snapshot) => {
//     //     let pokemons = []
//     //     snapshot.docs.forEach(doc => {
//     //       pokemons.push({ ...doc.data() })
//     //     })
//     //     // if (pokemons.length == 0) { pokemons = getAllPokemons() }
//     //     setSelectedPokemons(pokemons);
//     //   })
//     //   .catch((error) => {
//     //     console.error(error);
//     //   })

//     // let pokemonName = name.toLowerCase();
//     // let requiredPokemons = await Pokemon.find({ "name.english": { $regex: pokemonName, $options: 'i' } });
//     // return requiredPokemons;
//   }

//   return (
//     <main className="flex flex-col items-center w-full h-full px-4">
//       <h1 className="text-center font-extrabold text-sky-500 text-6xl my-4">Pokédex</h1>
//       <SearchBox getPokemonsByName={getPokemonsByName} getPokemonsByType={getPokemonsByType} />
//       <CardGallery selectedPokemons={selectedPokemons} getAllPokemons={getAllPokemons} />
//     </main>
//   );
// }

export default function Home() {
  const [selectedPokemons, setSelectedPokemons] = useState(null);
  const [pokemonType, setType] = useState(null);
  const [pokemonName, setName] = useState(null);

  const { data: allPokemons, isLoading1, error1 } = useSWR("/all", fetcher, { refreshInterval: 1000 * 60 * 60 });
  const { data: pokemonsByType, isLoading2, error2 } = useSWR(pokemonType ? `/type/${pokemonType}` : null, fetcher, { refreshInterval: 1000 * 60 * 60 });
  const { data: pokemonsByName, isLoading3, error3 } = useSWR(pokemonName ? `/name/${pokemonName}` : null, fetcher, { refreshInterval: 1000 * 60 * 60 });

  function getPokemonsByType(type) {
    console.log("getPokemonsByType: " + type);
    setType(type);
  }

  function getPokemonsByName(name) {
    console.log("getPokemonsByName: " + name);
    setName(name);
  }

  useEffect(() => {
    if (!isLoading2 && !error2 && pokemonsByType) {
      console.log('Selected Pokémon type data:', pokemonsByType);
      setSelectedPokemons(pokemonsByType);
    }
  }, [isLoading2, error2, pokemonsByType]);

  useEffect(() => {
    if (!isLoading3 && !error3 && pokemonsByName) {
      setSelectedPokemons(pokemonsByName);
    }
  }, [isLoading3, error3, pokemonsByName]);

  function getAllPokemons() {
    console.log("Getting all the pokemons");
    if (!isLoading1 && !error1) {
      setSelectedPokemons(allPokemons);
    }
  }

  return (
    <main className="flex flex-col items-center w-full h-full px-4">
      <h1 className="text-center font-extrabold text-blue-600 text-6xl my-4">Pokédex</h1>
      <SearchBox getPokemonsByName={getPokemonsByName} getPokemonsByType={getPokemonsByType} />
      <CardGallery selectedPokemons={selectedPokemons} getAllPokemons={getAllPokemons} />
    </main>
  );
}
