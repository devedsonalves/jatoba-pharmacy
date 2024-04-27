"use client"

import Header from "@/components/header";
import { products } from "@/data/products";
import { useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { banners } from "@/data/banners";
import Chat from "@/components/chat";
import { useCartStore } from "@/store/CartStore";
import formatCurrency from "@/utils/formatCurrency";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import ProductDetails from "@/components/product-details";
import { ProductType } from "@/types/product";
import Footer from "@/components/footer";

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openChat, setOpenChat] = useState(false)
  const [openProduct, setOpenProduct] = useState<ProductType | null>(null)

  const { addToCart } = useCartStore()

  return (
    <>
      <Header props={{
        openMenu: openMenu, 
        setOpenMenu: setOpenMenu,
        openCart: openCart,
        setOpenCart: setOpenCart,
      }} />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl pt-4 pb-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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

          <hr className="mb-12 mx-4" />

          <h1 className="text-2xl font-bold tracking-wide flex justify-center items-center mb-12">💊 Ofertas da Semana</h1>
          <div className="grid grid-cols-1 px-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <>
                <button key={product.id} onClick={() => setOpenProduct(product)} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-zinc-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                  </div>
                  <h3 className="w-full mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="w-full mt-1 text-lg font-medium text-gray-900">{formatCurrency(product.price, "BRL")}</p>
                </button>
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
                  className="flex justify-center items-center uppercase bg-amaranth font-bold text-white text-lg tracking-wide py-2 w-full rounded-[4px]">
                  <p>Adicionar ao Carrinho</p>
                  <span className="ml-4">🛒</span>
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      <button onClick={() => setOpenChat(true)} className="fixed bottom-4 right-4 p-3 bg-amaranth hover:bg-red-600 border border-white rounded-full flex justify-center items-center sm:hidden">
        <ChatBubbleOvalLeftEllipsisIcon className="text-white h-10 w-10"/>            
      </button>
          
      {openChat && (
        <Chat props={{ setOpenChat }} />
      )}

      {openProduct && (
        <div className="fixed h-screen w-screen top-0 left-0">
          <div className="bg-amaranth flex justify-between items-center py-4 px-4">
            <button onClick={() => setOpenProduct(null)}>
              <ArrowLeftIcon className="h-8 w-8 text-white" />
            </button>
          </div>     
    
          <ProductDetails product={openProduct} setOpenProduct={setOpenProduct} />
        </div>
      )}

      <Footer />
    </>
  );
}
