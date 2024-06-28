import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const pokemonTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
const typeColor = ["92BC2C", "595761", "0C69C8", "D9BE2B", "EE90E6", "D3425F", "FBA54C", "A1BBEC", "5F6DBC", "5FBD58", "DA7C4D", "75D0C1", "A0A29F", "B763CF", "FA8581", "C9BB8A", "5695A3", "539DDF"];

// export default function SearchBox({ getPokemonsByType, getPokemonsByName }) {
//     const [name, setName] = useState("");

//     function handleClick(type) {
//         console.log(type);
//         // Execute the function to get pokemons by type
//         getPokemonsByType(type)
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         setName("");
//         // Execute the function to get pokemons by name
//         getPokemonsByName(name)
//     }

//     return (
//         <div className='flex flex-col items-center space-y-4 w-full'>
//             <form onSubmit={handleSubmit} className='flex flex-col space-y-2 min-[500px]:flex-row items-center rounded-md justify-between space-x-2 w-full p-4 flex-1 border-2 border-sky-500'>
//                 <MagnifyingGlassIcon className='text-sky-500 h-6 w-6' />
//                 <input value={name} onChange={(e) => { setName(e.target.value) }} className='flex-1 p-2 text-center min-[500px]:text-left rounded-sm border border-gray-300 focus:outline-sky-500 placeholder:text-sky-300 text-zinc-800 font-medium' type="text" placeholder='I choose you!' />
//                 <button className='py-2 px-6 rounded-sm font-semibold bg-yellow-400 text-sky-800 transition-all duration-200 ease-out hover:bg-yellow-300' type='submit'>Search</button>
//             </form>

//             <Marquee className='w-full p-4 border-2 rounded-md' pauseOnHover >
//                 {
//                     pokemonTypes.map((type, index) => {
//                         return <button onClick={() => { handleClick(type) }} key={index} style={{ backgroundColor: `#${typeColor[index]}` }} className={`rounded-full p-1 mx-4 hover:opacity-85 active:opacity-60`} title={type}>
//                             <Image
//                                 src={`/pokemon_types/${type.toLowerCase()}.svg`}
//                                 className="h-6 w-6 min-[500px]:h-8 min-[500px]:w-8"
//                                 height={36}
//                                 width={36}
//                                 alt={type}
//                             />
//                         </button>
//                     })
//                 }
//             </Marquee>
//         </div>
//     )
// }

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
            <form onSubmit={handleSubmit} className='flex flex-col space-y-2 min-[500px]:flex-row items-center rounded-md justify-between space-x-2 w-full p-4 flex-1 border-2 border-blue-500'>
                <MagnifyingGlassIcon className='text-blue-600 h-6 w-6' />
                <input value={name} onChange={(e) => { setName(e.target.value) }} className='flex-1 p-2 text-center min-[500px]:text-left rounded-sm focus:outline-blue-500 placeholder:text-blue-300 text-zinc-800 font-semibold' type="text" placeholder='I choose you!' />
                <button className='py-2 px-6 rounded-sm font-semibold bg-yellow-400 text-blue-800 transition-all duration-200 ease-out hover:bg-yellow-300' type='submit'>Search</button>
            </form>

            <Marquee className='w-full p-4 border-2 border-blue-500 rounded-md' pauseOnHover >
                {
                    pokemonTypes.map((type, index) => {
                        return <button onClick={() => { handleClick(type) }} key={index} style={{ backgroundColor: `#${typeColor[index]}` }} className={`rounded-full p-1 mx-4 hover:opacity-85 active:opacity-60`} title={type}>
                            <Image
                                src={`/pokemon_types/${type.toLowerCase()}.svg`}
                                className="h-6 w-6 min-[500px]:h-8 min-[500px]:w-8"
                                height={36}
                                width={36}
                                alt={type}
                            />
                        </button>
                    })
                }
            </Marquee>
        </div>
    )
}
