"use client"

import { Suspense, useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Loading from "@/components/loading";

export default function CartPage() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  return (
    <Suspense fallback={<Loading />}>
      <Header props={{ openCart, setOpenCart, openMenu, setOpenMenu }} />
      
      <main className="w-full pb-32 pt-64 flex justify-center items-center">
        <p className="animate-bounce text-2xl font-mono font-bold tracking-wider">
          Em desenvolvimento...
        </p>
      </main>

      <Footer />
    </Suspense>
  )
}