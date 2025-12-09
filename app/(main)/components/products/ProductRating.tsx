import type { Rating } from "@app/(main)/types/product";
import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: Rating;
}

export function ProductRating({ rating }: ProductRatingProps) {
  if (rating.total === 0) {
    return <p className="mb-2 text-sm text-orange-500">Нет отзывов</p>;
  }

  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const fillPercentage =
      Math.min(Math.max(rating.value - (i - 1), 0), 1) * 100;

    stars.push(
      <div key={i} className="relative h-4 w-4">
        <Star className="absolute inset-0 h-4 w-4 text-primary" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          <Star className="h-4 w-4 fill-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-2 flex items-center gap-2">
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium text-neutral-900">
          {rating.value.toFixed(1)}
        </span>
        <div className="flex items-center gap-0.5">{stars}</div>
      </div>
      <span className="text-sm text-neutral-500">— {rating.total}</span>
    </div>
  );
}
