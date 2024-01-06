// Define the Product type
export interface Product {
    images: string[] | [];
    category: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    id: number;
    createdAt: string;
    quantity: number;
}