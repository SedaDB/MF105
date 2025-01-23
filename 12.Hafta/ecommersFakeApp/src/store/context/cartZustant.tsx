import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
  setTotalAmount: (amount: number) => void
  carts:[],
  itemCount: number,
  addToCart: (item: number) => void,
  clearCart: () => void,
}

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    totalPrice?: number;
    }

    export const useStore = create<Store>((set,get) => ({
        count: 1,
        totalAmount: 0,
        inc: () => set((state) => ({ count: state.count + 1 })),
        setTotalAmount: (totalAmount: number) => set((state) => ({ totalAmount })),
        carts: [],
        itemCount: 0,
        addToCart: (item: CartItem) => { }, // Placeholder function for type safety
        removeFromCart: (itemId: number) => { }, // Placeholder function for type safety
        clearCart: () => {
            set((state) => ({
                carts: [],
                itemCount: 0
            }))
        }
    }))