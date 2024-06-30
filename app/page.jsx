"use client"
import SearchBox from "@/components/SearchBox";
import CardGallery from "@/components/CardGallery";
import { useState, useEffect } from "react";

import axios from "axios";
import useSWR from "swr";

import LoadingPage from "./loading";
import ErrorPage from "./error";

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

export default function Home() {
	const [light, setLight] = useState(true);
	const [selectedPokemons, setSelectedPokemons] = useState(null);
	const [pokemonType, setType] = useState(null);
	const [pokemonName, setName] = useState(null);

	const { data: allPokemons, isLoading: isLoading1, error: error1 } = useSWR("/all", fetcher, { refreshInterval: 1000 * 60 * 60 });
	const { data: pokemonsByType, isLoading: isLoading2, error: error2 } = useSWR(pokemonType ? `/type/${pokemonType}` : null, fetcher, { refreshInterval: 1000 * 60 * 60 });
	const { data: pokemonsByName, isLoading: isLoading3, error: error3 } = useSWR(pokemonName ? `/name/${pokemonName}` : null, fetcher, { refreshInterval: 1000 * 60 * 60 });

	useEffect(() => {
		let htmlTag = document.querySelector("html");
		if (light) {
			htmlTag.classList.remove("dark");
		} else {
			htmlTag.classList.add("dark");
		}
	}, [light])

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
			{/* Dark mode toggle button */}
			<button onClick={() => { setLight(p => !p) }} className={`absolute flex items-center justify-center top-4 right-4 h-12 w-12 rounded-full bg-blue-500 transition-all duration-200 ease-out ${light ? 'hover:bg-zinc-800' : 'hover:bg-gray-300'}`}>
				{
					light ? (<i className="ri-moon-fill text-xl text-gray-200"></i>) : (<i className="ri-sun-fill text-xl text-zinc-800"></i>)
				}
			</button>

			{/* Search Box */}
			<SearchBox getPokemonsByName={getPokemonsByName} getPokemonsByType={getPokemonsByType} />

			{
				(!selectedPokemons || isLoading1 || isLoading2 || isLoading3) && <LoadingPage />
			}

			{
				(error1 || error2 || error3) && <ErrorPage error={[error1, error2, error3]} />
			}

			{/* Card Gallery */}
			<CardGallery selectedPokemons={selectedPokemons} getAllPokemons={getAllPokemons} />

			{/* Scroll to top button */}
			<button onClick={() => { window.scrollTo(0, 0) }} className="fixed bottom-4 right-4 bg-blue-500 transition-all hover:bg-blue-300 rounded-full h-12 w-12 flex items-center justify-center" id="scroll-to-top">
				<i className="ri-arrow-up-line text-xl"></i>
			</button>
		</main>
	);
}
