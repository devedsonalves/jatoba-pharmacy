import { create } from "zustand";

import { ProductInCartType } from "@/types/product-in-cart";

type CartStore = {
  cart: ProductInCartType[]
  addToCart: (item: ProductInCartType) => void
  removeToCart: (item: ProductInCartType) => void
  totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => {
  return {
    cart: [],
    addToCart: (item) => {
      set((state) => ({ cart: [ ...state.cart, item ] }))
    },
    removeToCart: (item) => {
      set((state) => ({ cart: state.cart.filter((product) => product.id !== item.id) }))
    },
    totalPrice: () => {
      const cartItems: ProductInCartType[] = get().cart
      let total = 0
      cartItems.forEach((item) => {
        total += item.price * item.amount
      })
      return total
    }
  }
})