export interface IParamsProduct {
    limit: number;
    skip: number;
}

interface IProduct {
    id: string;
    description: string;
    title: string;
    price: number;
    discountPercentage: number;
    rating: string;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
}

export interface IResponseProduct {
    products: Array<IProduct>;
    total: number;
    skip: number;
    limit: number;
}
