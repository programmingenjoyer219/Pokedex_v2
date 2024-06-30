"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function ErrorPage() {
    return (
        <div className='flex flex-col items-center justify-center text-blue-900 dark:text-sky-400 p-4'>
            <Image
                src={`/sprites/0.png`}
                width={80}
                height={80}
                className='mb-4'
            />
            <h1 className='text-5xl font-extrabold mb-2'>404</h1>
            <p className='text-lg mb-4'>The page you are looking for doesn't exist</p>
            <Link href="/">
                <span className='py-2 px-6 rounded-md bg-blue-600 text-white font-semibold transition-all duration-200 ease-out hover:bg-blue-500'>
                    Return to Home Page
                </span>
            </Link>
        </div>
    );
}
