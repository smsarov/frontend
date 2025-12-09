"use client"

import Image from "next/image";
import { Heart, ShoppingBag, Plus, Minus } from "lucide-react";
import BagIcon from '@public/icons/bag.svg'
import { useState } from "react";
import { cn } from "@app/lib/utils";

interface FavoriteButtonProps {
  isFavourite: boolean
  productId: string
}

export function FavoriteButton({ isFavourite, productId }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(isFavourite)

  const handleToggle = async () => {
    // TODO: Add your API call here
    setIsFavorited(!isFavorited)
  }

  return (
    <button
      onClick={handleToggle}
      className="absolute right-4 top-4 z-10 rounded-full  bg-neutral-200 p-4 shadow-sm transition-colors text-primary hover:bg-neutral-50 hover:text-accent"
      aria-label={isFavorited ? "Удалить из избранного" : "Добавить в избранное"}
    >
      <Heart
        className={cn(
          "h-6 w-6 transition-colors",
          isFavorited && "fill-accent text-accent",
        )}
      />
    </button>
  )
}

interface CartButtonProps {
  inCart: number
  productId: string
}

export function CartButton({ inCart, productId }: CartButtonProps) {
  const [cartCount, setCartCount] = useState(inCart)

  const handleAddToCart = async () => {
    // TODO: Add your API call here
    setCartCount(cartCount + 1)
  }

  const handleIncrement = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setCartCount(cartCount + 1)
  }

  const handleDecrement = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (cartCount > 0) {
      setCartCount(cartCount - 1)
    }
  }

  if (cartCount > 0) {
    return (
      <div className="absolute bottom-0 h-14 p-4 right-0 z-10 flex items-center gap-1 rounded-full bg-background shadow-sm">
        <button
          onClick={handleDecrement}
          className="flex p-2 items-center justify-center bg-neutral-100 rounded-full text-neutral-600 transition-colors hover:bg-accent hover:text-background"
          aria-label="Уменьшить количество"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="min-w-5 text-center text-sm font-medium text-neutral-900">{cartCount}</span>
        <button
          onClick={handleIncrement}
          className="flex p-2 items-center justify-center bg-neutral-100 rounded-full text-neutral-600 transition-colors hover:bg-accent hover:text-background"
          aria-label="Увеличить количество"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={handleAddToCart}
      className="absolute bottom-4 right-4 p-4 z-10 flex items-center bg-neutral-200 justify-center rounded-full text-primary shadow-sm transition-colors hover:bg-neutral-50 hover:text-accent"
      aria-label="Добавить в корзину"
    >
      {/* <ShoppingBag className="h-6 w-6" /> */}
      {/* <Image 
        src='/icons/bag.svg'
        alt='bag'
        width={30}
        height={30}
        className="h-6 w-6 text-primary"
        style={{color: 'var(--primary)'}}
      /> */}
      <BagIcon width="24" height="24"/>
    </button>
  )
}
