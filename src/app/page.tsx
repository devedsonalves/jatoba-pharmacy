"use client"

import { Suspense, useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Chat from "@/components/chat";
import { banners } from "@/data/banners";

import Link from "next/link";
import Loading from "@/components/loading";
import ListProducts from "@/components/list-products";
import { products } from "@/data/products";

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openChat, setOpenChat] = useState(false)

  return (
    <Suspense fallback={<Loading/>}>
      <Header props={{ openMenu, setOpenMenu, openCart, setOpenCart }} />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="w-full mb-4 p-1 flex justify-center items-center">
            <Carousel className="w-full py-4">
              <CarouselContent>
                {banners.map((banner, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <img
                        className="w-full rounded-xl "
                        src={banner.imageSrc}
                        alt={banner.imageAlt} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <br />

          <div className="flex justify-between items-center px-4 mb-12">
            <span className="text-2xl font-bold font-sans tracking-wide">💊 Ofertas da Semana</span>
            <Link href="/produtos" className="hover:border-b hover:scale-105 border-black text-md sm:text-lg font-sans font-bold sm:font-semibold">Ver Tudo</Link>
          </div>

          <ListProducts products={products} />
        </div>
      </div>

      <button onClick={() => setOpenChat(true)} className="fixed bottom-4 right-4 p-3 bg-amaranth hover:bg-red-600 border border-white rounded-full flex justify-center items-center">
        <ChatBubbleOvalLeftEllipsisIcon className="text-white h-8 w-8"/>            
      </button>
          
      {openChat && (
        <Chat props={{ setOpenChat }} />
      )}

      <Footer />
    </Suspense>
  );
}
