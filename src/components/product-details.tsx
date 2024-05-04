"use client"

import { useCartStore } from "@/store/cart-store"
import { ProductType } from "@/types/product"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails ({ 
  product, 
  setOpenProduct 
} : { 
  product: ProductType, 
  setOpenProduct: Dispatch<SetStateAction<ProductType | null>>
}) {
  const [amount, setAmount] = useState(1)
  const { addToCart } = useCartStore()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      amount: amount,
      href: product.href,
      imageAlt: product.imageAlt,
      imageSrc: product.imageSrc
    })

    setOpenProduct(null)
  }


  return (
    <div className="bg-white">
      <div>
        <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl tracking-tight text-gray-900">R$ {product.price}</p>

            <form onSubmit={handleSubmit} className="mt-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-amaranth px-8 py-3 text-xl font-bold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                ADICIONAR AO CARRINHO 🛒
              </button>
              <div className="mt-4 text-white w-full flex justify-center items-center gap-2">
                <button onClick={() => amount > 1 && setAmount(amount - 1)} type="button" className="bg-amaranth h-14 w-14 rounded-full flex justify-center items-center">
                  <MinusIcon className="h-8 w-8" />
                </button>
                <span className="bg-amaranth h-14 w-20 flex justify-center items-center text-2xl font-bold rounded-xl">{amount}</span>
                <button onClick={() => setAmount(amount + 1)} type="button" className="bg-amaranth h-14 w-14 rounded-full flex justify-center items-center">
                  <PlusIcon className="h-8 w-8" />
                </button>
              </div> 
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Descrição</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
