'use client'

import { Product } from "@/types";
import { Typography } from "@/common";
import { fetchProducts } from "@/api";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/cards/category-card"
import { filterDays } from "@/utils/findDate";

function NewArrival() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        const newArrivals = filterDays(response);
        setProducts(newArrivals);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container grid gap-4">
      <Typography placeholder variant="h2" className="heading">
        New arrivals
      </Typography>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between gap-y-[60px] md:gap-y-10 sm:gap-y-8 gap-x-[18px] md:gap-x-4">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          products?.map((row, idx) => <ProductCard key={idx} row={row} />)
        )}
      </div>
    </div>
  );
}

export default NewArrival;
