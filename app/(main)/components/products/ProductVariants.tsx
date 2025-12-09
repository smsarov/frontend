"use client"

import type { Variant } from "@app/(main)/types/product"
import { useState } from "react"
import { cn } from "@app/lib/utils"

interface ProductVariantsProps {
  variants: Variant[]
  productId: string
}

export function ProductVariants({ variants, productId }: ProductVariantsProps) {
  const [selectedVolume, setSelectedVolume] = useState<string | null>(null)

  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {variants.map((variant) => (
        <button
          key={variant.volume}
          onClick={() => setSelectedVolume(variant.volume)}
          className={cn(
            "relative rounded-full border px-3 py-1 text-sm font-medium transition-colors",
            selectedVolume === variant.volume
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-neutral-300 bg-white text-neutral-700 hover:border-orange-300",
          )}
        >
          {variant.volume}
          {variant.marker && (
            <span
              className={cn(
                "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold",
                selectedVolume === variant.volume ? "bg-white text-orange-500" : "bg-neutral-800 text-white",
              )}
            >
              {variant.marker}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
