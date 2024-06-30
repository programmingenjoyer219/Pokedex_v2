import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokédex 2.0",
  description: "Pokédex Web App built using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-auto overflow-x-hidden flex flex-col items-center`}>
        <Link href={"/"} className="flex items-center justify-center">
          <img
            src={"/pokemon-logo.png"}
            height={84}
            width={200}
            alt="Pokemon-logo"
            className="sm:h-[180px] sm:w-[428px]"
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
