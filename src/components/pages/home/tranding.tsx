"use client"

import { Product } from "@/types"
import { fetchProducts } from "@/api"
import { Typography } from "@/common"
import React, { useEffect, useState } from "react"
import ProductCard from "@/components/cards/category-card"

function Tranding() {
  const [data, setData] = useState<Product[]>([])

  // Fetch data from the API on component mount
  const fetchData = async () => {
    try {
      const products = await fetchProducts()
      const filteredData = products.filter((product) => product?.rating >= 5)
      setData(filteredData)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container grid gap-[30px]">
      <div data-aos="fade-up">
        <Typography placeholder variant="h2" className="subtitle">
          Trending products
        </Typography>
        <Typography placeholder variant="paragraph" className="desc">
          Lorem ipsum dolor sit amet consectetur
        </Typography>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between gap-y-[60px] md:gap-y-10 sm:gap-y-8 gap-x-[18px] md:gap-x-4">
        {data.map((row, idx) => (
          <ProductCard key={idx} row={row} />
        ))}
      </div>
    </div>
  )
}

export default Tranding
