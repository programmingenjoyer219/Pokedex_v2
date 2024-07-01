import { Inter } from "next/font/google";
import Link from "next/link";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pokédex 2.0",
	description: "Pokédex Web App built using Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="">
			<head>
				<title>Pokedex 2.0</title>
			</head>
			<body className={`${inter.className} bg-gray-100 dark:bg-zinc-900 min-h-screen overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center`}>
				<ThemeToggleButton />

				<Link href={"/"} className="flex items-center justify-center">
					<img
						src={"/pokemon-logo.png"}
						height={84}
						width={200}
						alt="Pokemon-logo"
						className=""
					/>
				</Link>

				{children}
			</body>
		</html>
	);
}
