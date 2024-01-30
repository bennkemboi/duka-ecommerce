import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CartProvider from "@/providers/cartProvider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Duka.",
  description: "A Modern Ecommerce Website Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="${inter.className} text-slate-600">
        <CartProvider>
          <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="flex-grow ">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
