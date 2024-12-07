import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {ThemeProvider} from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "CrimpByte - Innovating Technology Solutions",
  description: "CrimpByte offers cutting-edge technology solutions to drive your business forward. Discover our innovative services and products.",
  keywords: ["crimpbyte", "innovative technology", "nigerian business solutions", "design", "development", "software"],
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className='overflow-x-hidden mx-auto'>
        <ThemeProvider>

        <NavBar />
        {children}
        <Footer />
        </ThemeProvider>
       
      </body>
    </html>
  );
}
