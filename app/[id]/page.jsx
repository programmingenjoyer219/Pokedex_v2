"use client"
import axios from 'axios';
import Image from 'next/image';
import useSWR from 'swr';
import Link from 'next/link';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000/api/id' });

const pokemonTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
const typeColor = ["92BC2C", "595761", "0C69C8", "D9BE2B", "EE90E6", "D3425F", "FBA54C", "A1BBEC", "5F6DBC", "5FBD58", "DA7C4D", "75D0C1", "A0A29F", "B763CF", "FA8581", "C9BB8A", "5695A3", "539DDF"];

async function fetcher(endpoint) {
    try {
        const result = await axiosInstance.get(endpoint);
        return result.data.result;
    } catch (error) {
        console.error(error);
        return { error: error.message }
    }
}

export default function Page({ params: { id: _id } }) {
    const { data: pokemon, isLoading, error } = useSWR(`/${_id}`, fetcher, { refreshInterval: 1000 * 60 * 60 });
    if (!isLoading && !error) {
        if (pokemon[0]) {
            const { id, type, base, species, description, evolution, profile, name: { english } } = pokemon[0];
            return (
                <main className='flex flex-col items-center w-full p-6 space-y-4'>
                    <h1 className='text-4xl font-extrabold text-blue-600 text-center'>{english}</h1>
                    <div className='grid grid-cols-2 grid-rows-1'>

                        <div id='card-left' className='gap-4 flex flex-col items-center p-4'>
                            <div id='basic-info-container' className='flex items-center gap-2'>
                                <Image
                                    src={`/images/${id}.png`}
                                    className='sm:h-[280px] sm:w-[280px]'
                                    height={200}
                                    width={200}
                                    alt={english}
                                />

                                <div id='basic-info' className='min-w-[280px] min-h-[280px] flex flex-col justify-center space-y-2'>
                                    <span className='w-full text-zinc-700 font-semibold'>Species: <span className='text-blue-600 font-bold'>{species}</span></span>
                                    <span className='w-full text-zinc-700 font-semibold'>Height: <span className='font-bold text-blue-600'>{profile.height}</span></span>
                                    <span className='w-full text-zinc-700 font-semibold'>Weight: <span className='font-bold text-blue-600'>{profile.weight}</span></span>
                                    <span className='w-full text-zinc-700 font-semibold'>Gender Ratio: <span className='font-bold text-blue-600'><i className="ri-men-line text-zinc-800 text-lg"></i> {profile.gender} <i className="ri-women-line text-zinc-800 text-lg"></i></span></span>

                                    <span className='text-zinc-700 font-semibold w-full'>Abilities:
                                        <span className='font-bold text-blue-600'>
                                            {
                                                profile.ability.map(a => {
                                                    return ` ${a[0]} `
                                                })
                                            }
                                        </span>
                                    </span>

                                    <div id='pokemon-type' className='flex flex-col items-center space-y-2'>
                                        <span className='text-zinc-700 font-semibold w-full'>Type:</span>
                                        <div className='flex items-center justify-start gap-2 w-full'>
                                            {
                                                type?.map((t, index) => {
                                                    return <div key={index} style={{ border: `2px solid #${typeColor[pokemonTypes.indexOf(t)]}`, backgroundColor: `#${typeColor[pokemonTypes.indexOf(t)]}` }} className="flex items-center p-2 gap-2 rounded-full w-[120px] shadow-md">
                                                        <Image
                                                            src={`/pokemon_types/${t.toLowerCase()}.svg`}
                                                            className="rounded-full p-1"
                                                            style={{ backgroundColor: `#${typeColor[pokemonTypes.indexOf(t)]}` }}
                                                            height={28}
                                                            width={28}
                                                            alt={t}
                                                        />
                                                        <span className="text-center w-full text-white font-medium">{t}</span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className='text-zinc-700 font-medium text-lg'>{description}</p>
                        </div>


                        <div id='card-right' className='flex flex-col space-y-4 p-4'>
                            <span className='w-full text-zinc-700 font-semibold text-2xl'>{english}'s Stats:</span>
                            <div className='grid grid-rows-6 grid-cols-2 w-full gap-4'>
                                {/* HP */}
                                <span className='w-full flex gap-2 items-center'>
                                    <i className="ri-heart-pulse-fill text-2xl text-red-400"></i>
                                    <span className='text-zinc-700 font-medium'>HP</span>
                                </span>
                                <div className='p-2 border rounded-md'>
                                    <div style={{ width: `${base["HP"] * 0.5}%` }} className='bg-red-400 text-red-400'>.</div>
                                </div>
                                {/* Attack */}
                                <span className='w-full flex gap-2 items-center'>
                                    <i className="ri-sword-line text-orange-400 text-2xl"></i>
                                    <span className='text-zinc-700 font-medium'>Attack</span>
                                </span>
                                <div className='p-2 border rounded-md'>
                                    <div style={{ width: `${base["Attack"] * 0.5}%` }} className='bg-orange-400/75 text-orange-400/75'>.</div>
                                </div>
                                {/* Sp. Attack */}
                                <span className='w-full flex gap-2 items-center'>
                                    <i className="ri-sword-fill text-2xl text-orange-400"></i>
                                    <span className='text-zinc-700 font-medium'>Sp. Attack</span>
                                </span>
                                <div className='p-2 border rounded-md'>
                                    <div style={{ width: `${base["Sp. Attack"] * 0.5}%` }} className='bg-orange-400 text-orange-400'>.</div>
                                </div>
                                {/* Defense */}
                                <span className='w-full flex gap-2 items-center'>
                                    <i className="ri-shield-line text-2xl text-green-600"></i>
                                    <span className='text-zinc-700 font-medium'>Defense</span>
                                </span>
                                <div className='p-2 border rounded-md'>
                                    <div style={{ width: `${base["Defense"] * 0.5}%` }} className='bg-green-600/75 text-green-600/75'>.</div>
                                </div>
                                {/* Sp. Defence */}
                                <span className='w-full flex gap-2 items-center'>
                                    <i className="ri-shield-fill text-2xl text-green-600"></i>
                                    <span className='text-zinc-700 font-medium'>Sp. Defense</span>
                                </span>
                                <div className='p-2 border rounded-md'>
                                    <div style={{ width: `${base["Sp. Defense"] * 0.5}%` }} className='bg-green-600 text-green-600'>.</div>
                                </div>
                                {/* Speed */}
                                <span className='w-full flex gap-2 items-center'>
                                    <i className="ri-speed-up-line text-2xl text-sky-600"></i>
                                    <span className='text-zinc-700 font-medium'>Speed</span>
                                </span>
                                <div className='p-2 border rounded-md'>
                                    <div style={{ width: `${base["Speed"] * 0.5}%` }} className='bg-sky-600 text-sky-600'>.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            );
        } else {
            return (
                <div className='flex flex-col items-center justify-center text-blue-900 p-4'>
                    <Image
                        src={`/sprites/${Math.floor(Math.random() * 899)}.png`}
                        width={150}
                        height={150}
                        className='mb-4'
                    />
                    <h1 className='text-5xl font-extrabold mb-2'>Oops...</h1>
                    <p className='text-lg mb-4'>Looks like the pokemon you are looking for doesn't exist.</p>
                    <Link href="/">
                        <span className='py-2 px-6 rounded-md bg-blue-600 text-white font-semibold transition-all duration-200 ease-out hover:bg-blue-500'>
                            Return to Home Page
                        </span>
                    </Link>
                    <div className='mt-4'>
                        <p className='text-zinc-700 text-sm'>
                            Try looking for some other pokemon.
                        </p>
                    </div>
                </div>
            )
        }
    }
}
