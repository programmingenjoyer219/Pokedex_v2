import Image from "next/image";
import 'remixicon/fonts/remixicon.css'

const pokemonTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
const typeColor = ["92BC2C", "595761", "0C69C8", "D9BE2B", "EE90E6", "D3425F", "FBA54C", "A1BBEC", "5F6DBC", "5FBD58", "DA7C4D", "75D0C1", "A0A29F", "B763CF", "FA8581", "C9BB8A", "5695A3", "539DDF"];

export default function Card({ data }) {
    const { id, name: { english }, type, profile: { weight, height } } = data;
    return (
        <div style={{ border: `2px solid #${typeColor[pokemonTypes.indexOf(type[0])]}` }} className={`w-[280px] flex flex-col items-center justify-center p-2 gap-4 rounded-xl transition-all duration-200 ease-out hover:bg-blue-300/30`}>
            <Image
                src={`/images/${id}.png`}
                alt={english}
                height={120}
                width={120}
            />
            <span className="text-zinc-700 font-bold text-xl">{english}</span>
            <div className="flex items-center justify-center gap-2">
                {
                    type?.map(t => {
                        return <div style={{ border: `2px solid #${typeColor[pokemonTypes.indexOf(t)]}`, backgroundColor: `#${typeColor[pokemonTypes.indexOf(t)]}` }} className="flex items-center p-1 gap-1 rounded-full w-[120px]">
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

            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-1">
                    <i className="ri-ruler-fill text-gray-600"></i>
                    <span>{height}</span>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <i className="ri-scales-2-fill text-gray-600"></i>
                    <span>{weight}</span>
                </div>
            </div>
        </div>
    )
}
