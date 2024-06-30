"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function ErrorPage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-blue-900 p-4'>
            <Image
                src={`/sprites/0.png`}
                width={150}
                height={150}
                className='mb-4'
            />
            <h1 className='text-5xl font-extrabold mb-2'>Oh no! Something went wrong...</h1>
            <p className='text-lg mb-4'>An unexpected error has occurred. Our team of Pokémon trainers is on it!</p>
            <Link href="/">
                <span className='py-2 px-6 rounded-md bg-blue-600 text-white font-semibold transition-all duration-200 ease-out hover:bg-blue-500'>
                    Return to Home Page
                </span>
            </Link>
        </div>
    );
}
