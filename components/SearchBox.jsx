import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const pokemonTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
const typeColor = ["92BC2C", "595761", "0C69C8", "D9BE2B", "EE90E6", "D3425F", "FBA54C", "A1BBEC", "5F6DBC", "5FBD58", "DA7C4D", "75D0C1", "A0A29F", "B763CF", "FA8581", "C9BB8A", "5695A3", "539DDF"];

export default function SearchBox({ getPokemonsByType, getPokemonsByName }) {
    const [name, setName] = useState("");

    function handleClick(type) {
        console.log("Button clicked: " + type);
        getPokemonsByType(type);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        getPokemonsByName(name);
    }

    return (
        <div className='flex flex-col items-center space-y-4 w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4 sm:flex-row items-center rounded-lg justify-between space-x-2 w-full p-6 bg-gray-50 dark:bg-zinc-800 shadow-lg border border-gray-200 dark:border-zinc-500'>
                <MagnifyingGlassIcon className='text-blue-600 h-6 w-6' />
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='bg-gray-50 dark:bg-zinc-800 flex-1 p-3 text-center sm:text-left rounded-md border border-gray-300 dark:border-zinc-500 focus:outline-none focus:border-blue-500 focus:ring placeholder:text-blue-300 text-gray-800 dark:text-gray-200 font-semibold'
                    type="text"
                    placeholder='I choose you!'
                />
                <button className='py-2 px-8 rounded-md font-semibold bg-yellow-400 text-blue-800 transition-all duration-200 ease-out hover:bg-yellow-300 hover:shadow-md' type='submit'>
                    Search
                </button>
            </form>

            <Marquee className='w-full p-4 border-2 border-blue-500 rounded-md bg-gray-50 dark:bg-zinc-800 shadow-lg' pauseOnHover>
                {
                    pokemonTypes.map((type, index) => (
                        <button
                            onClick={() => handleClick(type)}
                            key={index}
                            style={{ backgroundColor: `#${typeColor[index]}` }}
                            className='rounded-full p-2 mx-4 hover:opacity-85 active:opacity-60 transition-all duration-150 ease-out transform hover:scale-105 active:scale-95'
                            title={type}
                        >
                            <Image
                                src={`/pokemon_types/${type.toLowerCase()}.svg`}
                                className="h-8 w-8 sm:h-10 sm:w-10"
                                height={40}
                                width={40}
                                alt={type}
                            />
                        </button>
                    ))
                }
            </Marquee>

        </div>
    )
}
