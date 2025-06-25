import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CartState, CartActions, CartItem, Product, ProductOptions } from 'shared/types'

interface CartStore extends CartState, CartActions {}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // State
      items: [],
      total: 0,
      itemCount: 0,
      isLoading: false,
      error: undefined,

      // Actions
      addItem: (product: Product, quantity: number = 1, options?: ProductOptions) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            item => 
              item.productId === product.id && 
              item.color === options?.color &&
              item.size === options?.size
          )

          let newItems: CartItem[]

          if (existingItemIndex >= 0) {
            // Update existing item quantity
            newItems = state.items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          } else {
            // Add new item
            const newItem: CartItem = {
              id: Date.now(), // Simple ID generation
              productId: product.id,
              name: product.name,
              price: product.price,
              originalPrice: product.originalPrice,
              quantity,
              image: product.image,
              color: options?.color,
              size: options?.size,
              inStock: product.inStock,
              maxQuantity: product.stockQuantity
            }
            newItems = [...state.items, newItem]
          }

          const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

          return {
            items: newItems,
            total: newTotal,
            itemCount: newItemCount,
            error: undefined
          }
        })
      },

      removeItem: (itemId: number) => {
        set((state) => {
          const newItems = state.items.filter(item => item.id !== itemId)
          const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

          return {
            items: newItems,
            total: newTotal,
            itemCount: newItemCount,
            error: undefined
          }
        })
      },

      updateQuantity: (itemId: number, quantity: number) => {
        if (quantity < 1) return

        set((state) => {
          const newItems = state.items.map(item =>
            item.id === itemId
              ? { ...item, quantity: Math.min(quantity, item.maxQuantity || 999) }
              : item
          )

          const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

          return {
            items: newItems,
            total: newTotal,
            itemCount: newItemCount,
            error: undefined
          }
        })
      },

      clearCart: () => {
        set({
          items: [],
          total: 0,
          itemCount: 0,
          error: undefined
        })
      },

      getItemById: (itemId: number): CartItem | undefined => {
        return get().items.find(item => item.id === itemId)
      }
    }),
    {
      name: 'micromart-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        total: state.total,
        itemCount: state.itemCount
      })
    }
  )
) 