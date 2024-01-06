'use client'

// ProductCard.tsx
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Rating,
  IconButton,
} from "@/common"
import axios from "axios"
import React, { useState } from "react"
import Link from "next/link"
import { Product } from "@/types"
import { fetchProducts } from "@/api"
import { toast } from 'sonner';

interface ProductCardProps {
  row: Product
}

function ProductCard({ row }: ProductCardProps) {
  const { id, name, images, category, rating, price } = row
  const [products, setProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem('carts') as string) || []
  );

  const handleRatingChange = async (productId: number, newRating: number) => {
    try {
      // Make an API request to update the product's rating
      const res = await axios.patch(
        `https://16a112ec7cdcde1f.mokky.dev/products/${productId}`,
        {
          rating: newRating,
        }
      )
      await fetchProducts()
    } catch (error) {
      console.error("Error updating product rating:", error)
    }
  }

  const handleClick = () => {
    const isExistProduct = products.find(c => c.id === id);

    if (isExistProduct) {
      const updatedData = products.map(c => {
        if (c.id === id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        }

        return c;
      });

      localStorage.setItem('carts', JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...row, quantity: 1 }];
      localStorage.setItem('carts', JSON.stringify(data));
    }
    toast.success('Product added to your cart!!');
  };

  return (
    <Card
      key={id}
      placeholder
      data-aos="fade-up"
      className="overflow-hidden"
    >
      <Link href={`/details/${id}`}>
        <CardHeader
          placeholder
          floated={false}
          shadow={false}
          color="transparent"
          className="h-72 md:h-64 sm:h-52 m-0 rounded-none"
        >
          <img
            loading="lazy"
            src={images[0]}
            alt={`Product: ${name}`}
            className="w-full h-full"
          />
        </CardHeader>
      </Link>
      <CardBody placeholder>
        <Typography placeholder variant="h4" color="blue-gray">
          {name}
        </Typography>
        <div className="flex items-center justify-between">
          <Rating
            placeholder
            ratedColor="amber"
            unratedColor="amber"
            value={rating}
            onChange={(value) => handleRatingChange(id, value)}
          />
          <IconButton
            placeholder
            onClick={handleClick}
            className="p-6 rounded-[12px] bg-lightCyan text-brown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
              />
            </svg>
          </IconButton>
        </div>
        <Typography placeholder className="font-normal text-primary font-bold">
          $ {price}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default ProductCard
