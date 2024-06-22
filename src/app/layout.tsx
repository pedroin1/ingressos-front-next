import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingressos | Home",
  description: "Pagina de ingressos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} 
        flex flex-col min-h-screen items-center bg-primary text-default`}
      >
        <div className="p-4 md:p-10 w-full max-w-[1500px]">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
