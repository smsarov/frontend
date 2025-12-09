export type Variant = {
    volume: string,
    marker?: string
}

export type Rating = {
    value: number,
    total: number
}

export type Product = {
    src: string,
    name: string,
    category: string,
    
    isTop: boolean,
    isFavourite: boolean,
    inCart: number,

    variants: Variant[],
    rating: Rating,

    price: string,
    
}