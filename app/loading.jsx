import Image from 'next/image';

export default function LoadingPage() {
    return (
        <div className="fixed top-0 left-0 z-20 bg-[#de5353] w-screen h-screen flex flex-col items-center justify-center">
            <Image
                src="/pokeball.png"
                alt="Pokeball"
                width={100}
                height={100}
                className="animate-spin mb-4"
            />
            {/* <span className="text-3xl text-center text-gray-50 font-semibold">Loading...</span> */}
        </div>
    );
}
