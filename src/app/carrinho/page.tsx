"use client"

import { Suspense, useState } from "react";

import Loading from "@/components/loading";
import { ProductInCartType } from "@/types/product-in-cart";
import { useCartStore } from "@/store/cart-store";
import formatCurrency from "@/utils/format-currency";
import Link from "next/link";
import { TrashIcon } from "@radix-ui/react-icons";

export default function CartPage() {
  const { cart, totalPrice, removeToCart } = useCartStore()

  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [openCart, setOpenCart] = useState<boolean>(false)


  return (
    <Suspense fallback={<Loading />}>
      <main className="w-screen pb-8 pt-24 flex justify-center items-center max-h-[100vh]">
        <section className="w-full">
          <div className="mx-auto w-full max-w-screen-xl px-6 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col justify-center items-center">
            <div className="w-full mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Seu Carrinho <span className="pl-3">🛒</span></h1>
              </header>

              {cart.length > 0 ? (
                <>
                  <div className="w-full mt-8">
                    <ul className="w-full space-y-4 max-h-[50vh] overflow-y-auto shadow p-4">
                      {cart.map((product, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="size-16 rounded object-cover"
                          />


                          <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <h3 className="text-sm text-gray-900">{product.name}</h3>
                            <span className="inline pr-2">Preço:</span>
                            <span className="inline">{formatCurrency(product.price , 'BRL')}</span>
                          </div>


                          <div className="flex flex-1 items-center justify-end gap-2">
                            <form>
                              <label htmlFor="Line3Qty" className="sr-only"> Quantity </label>

                              <input
                                type="number"
                                min="1"
                                value={product.amount}
                                id="Line3Qty"
                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                              />
                            </form>

                            <button onClick={() => removeToCart(product)} className="text-gray-600 transition hover:text-red-600">
                              <span className="sr-only">Remove item</span>

                              <TrashIcon className="h-4 w-4"/>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 w-full flex justify-between border-t border-gray-100 pt-8">
                      <div className="w-full space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                          <div className="flex justify-between">
                            <dt>Subtotal</dt>
                            <dd>{formatCurrency(totalPrice(),'BRL')}</dd>
                          </div>

                          <div className="flex justify-between">
                            <dt>Frete</dt>
                            <dd>{formatCurrency(7,'BRL')}</dd>
                          </div>

                          <div className="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd>{formatCurrency(totalPrice() + 7,'BRL')}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center gap-4 pt-4 mx-1">
                    <Link
                      href="/produtos"
                      className="block rounded bg-zinc-200 p-2 text-sm text-black font-semibold tracking-wider transition hover:bg-zinc-300"
                    >
                      Continuar comprando
                    </Link>
                    <Link
                      href="#"
                      className="block rounded bg-amaranth p-2 text-sm text-gray-100 font-semibold tracking-wider transition hover:bg-red-600"
                    >
                      Finalizar Pedido
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className='my-12 flex justify-center items-center text-lg'>
                    <p>Nenhum produto no carrinho...</p>
                  </div>
                  <div className="w-full flex justify-center items-center gap-4 pt-6 -m-2">
                    <Link
                      href="/produtos"
                      className="block rounded bg-zinc-200 p-2 text-sm text-black font-semibold tracking-wider transition hover:bg-zinc-300"
                    >
                      Continuar comprando
                    </Link>
                    <Link
                      href="#"
                      className="block rounded bg-amaranth p-2 text-sm text-gray-100 font-semibold tracking-wider transition hover:bg-red-600"
                    >
                      Finalizar Pedido
                    </Link>
                  </div>
                </>
              )}
            </div>

          </div>
        </section>
      </main>
    </Suspense>
  )
}