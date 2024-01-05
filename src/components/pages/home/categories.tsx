"use client"

import Link from "next/link"
import { Product } from "@/types"
import { fetchProducts } from "@/api"
import { categoryData } from "@/data/category"
import React, { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

function Categories() {
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts()
        setData(products)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const productTotal = (category: string) => {
    const filteredData = data.filter((product) => product.category === category)
    return filteredData.length
  }

  return (
    <div className="container text-center grid gap-14">
      <div data-aos="fade-up">
        <Typography placeholder variant="h2" className="subtitle">
          Categories
        </Typography>
        <Typography placeholder variant="paragraph" className="desc">
          Lorem ipsum dolor sit amet consectetur
        </Typography>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between gap-y-[60px] md:gap-y-10 sm:gap-y-8 gap-x-[18px] md:gap-x-4">
        {/* Mapping through categoryData array */}
        {categoryData.map(({ categoryName, urlImg }) => (
          <Link href={`/category/${categoryName}`}>
            <Card
              placeholder
              key={urlImg}
              data-aos="fade-up"
              className="w-full mt-6 shadow-md rounde-4xl"
            >
              <CardHeader
                placeholder
                color="blue-gray"
                className="relative h-56"
              >
                <img loading="lazy" src={urlImg} alt="card-image" />
              </CardHeader>
              <CardBody placeholder>
                <Typography
                  placeholder
                  variant="h5"
                  color="blue-gray"
                  className="mb-2"
                >
                  {categoryName}
                </Typography>
                <Typography placeholder>
                  {productTotal(categoryName)}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
