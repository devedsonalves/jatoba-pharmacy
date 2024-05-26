import { create } from "zustand";

import { ProductInCartType } from "@/types/product-in-cart";

type CartStore = {
  cart: ProductInCartType[]
  addToCart: (item: ProductInCartType) => void
  removeToCart: (item: ProductInCartType) => void
  updateProductInCart: (item: ProductInCartType) => void
  totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => {
  return {
    cart: [],
    addToCart: (product) => {
      set((state) => {
        const existingProduct = state.cart.find((item) => item.id === product.id);
    
        if (existingProduct) {
          const cart = state.cart.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + product.amount } : item
        );
        return { cart };
  
        } else return { cart: [...state.cart, product] };
      })
    }, 
    removeToCart: (item) => {
      set((state) => ({ cart: state.cart.filter((product) => product.id !== item.id) }))
    },
    updateProductInCart: (item) =>
      set((state) => {
        const cart = state.cart.map((product) =>
          product.id === item.id ? item : product
      );
      return { cart };
    }),
    totalPrice: () => {
      const cartItems: ProductInCartType[] = get().cart
      let total = 0
      cartItems.forEach((item) => {
        total += item.price * item.amount
      })
      return total
    },
  }
})