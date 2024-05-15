"use client"

import { useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Chat from "@/components/chat";
import { products } from "@/data/products";
import { banners } from "@/data/banners";
import { useCartStore } from "@/store/cart-store";

import formatCurrency from "@/utils/format-currency";
import Link from "next/link";

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openChat, setOpenChat] = useState(false)

  const { addToCart } = useCartStore()

  return (
    <>
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
            <Link href="/produtos" className="hover:border-b hover:scale-105 border-black text-lg font-sans font-semibold">Ver Tudo</Link>
          </div>

          <ul className="grid grid-cols-1 px-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product, index) => (
              <li key={index}>
                <Link href={product.href} className="group block overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-[350px] sm:h-[250px] w-full object-cover sm:object-contain transition duration-500 group-hover:scale-105"
                  />

                  <div className="sm:h-28 relative bg-white pt-3 flex flex-col justify-between">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {product.name}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">{formatCurrency(product.price, "BRL")}</span>
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      href: product.href,
                      price: product.price,
                      amount: 1,
                      imageSrc: product.imageSrc,
                      imageAlt: product.imageAlt
                    })
                  }}           
                  className="mt-2 flex justify-center items-center uppercase bg-amaranth font-bold text-white text-md tracking-wide py-[0.5rem] w-full rounded-[4px]">
                  <p className="text-md sm:text-xs sm:  px-1">Adicionar ao Carrinho</p>
                  <span className="ml-2 sm:hidden">🛒</span>
                </button>
              </li> 
            ))}
          </ul>
        </div>
      </div>

      <button onClick={() => setOpenChat(true)} className="fixed bottom-4 right-4 p-3 bg-amaranth hover:bg-red-600 border border-white rounded-full flex justify-center items-center">
        <ChatBubbleOvalLeftEllipsisIcon className="text-white h-8 w-8"/>            
      </button>
          
      {openChat && (
        <Chat props={{ setOpenChat }} />
      )}

      <Footer />
    </>
  );
}
