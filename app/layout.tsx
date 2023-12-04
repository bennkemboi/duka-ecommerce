import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Duka",
  description: "A Modern Ecommerce shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='${poppins.className} text-slate-600' >
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <main className="flex-grow ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
