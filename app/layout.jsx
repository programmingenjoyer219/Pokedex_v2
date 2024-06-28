import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokédex 2.0",
  description: "Pokédex Web App built using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-auto overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
