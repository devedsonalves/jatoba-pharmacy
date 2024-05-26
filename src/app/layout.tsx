import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farmácia Jatobá",
  description: "Projeto para disciplina de Sistemas de Informação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden max-w-[100vw]">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
