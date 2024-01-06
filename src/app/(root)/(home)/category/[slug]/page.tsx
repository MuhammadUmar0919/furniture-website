"use client"

import axios from "axios"
import { useEffect } from "react"
import { Product } from "@/types"
import React, { useState } from "react"
import { RootState } from "@/redux/store"
import { useParams } from "next/navigation"
import Pagination from "@/components/pagination"
import { toggleSidebar } from "@/redux/sidebarSlice"
import { useDispatch, useSelector } from "react-redux"
import { Sidebar } from "@/components/pages/category/filter"
import NewArrival from "@/components/pages/category/new-arrival"
import KeeppInTouch from "@/components/keep-in-touch"
import ProductCard from "@/components/cards/category-card"
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react"

function Category() {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const [search, setSearch] = useState<string>("")
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const itemsPerPage = 6
  const { price, rating } = useSelector((state: RootState) => state.filter)

  const fetchData = async () => {
    try {
      let params: { [key: string]: string | number } = {
        page: currentPage,
        limit: itemsPerPage,
        category: Array.isArray(slug) ? slug.join(",") : slug,
      }

      if (typeof price === "number" && price > 0) {
        params = {
          ...params,
          price: price.toString(),
        }
      }

      if (typeof rating === "number" && rating > 0) {
        params = {
          ...params,
          rating: rating.toString(),
        }
      }

      if (search !== "") {
        params = {
          ...params,
          name: search.charAt(0).toUpperCase() + search.slice(1),
        }
      }

      const response = await axios.get<{
        items: Product[]
        meta: { total_items: number }
        totalItems: number
      }>(`https://16a112ec7cdcde1f.mokky.dev/products`, { params })

      const updatedProducts = response.data.items.map((item) => ({
        ...item,
        images: item.images || [], // handle the case where images is undefined
      }))

      setProducts(updatedProducts)
      setTotalItems(response.data.meta.total_items)
    } catch (error) {
      console.error("Error fetching data:", error)
      setError("Error fetching data. Please try again later.")
    }
  }
  useEffect(() => {
    fetchData()
  }, [currentPage, slug, price, rating])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset page when submitting the search form
    fetchData();
  }

  return (
    <>
      <div className="container grid gap-y-10 md:gap-y-8 sm:gap-y-6">
        <div className="flex md:flex-col justify-between gap-10 md:gap-4 md:items-end px-32 md:px-0">
        <form onSubmit={handleSearchSubmit} className='contents'>
            <div className="w-full flex items-center justify-between bg-[white] rounded-[10px] shadow-md text-rgba(34, 34, 34, 0.70) text-[20px] p-4">
              <input
                value={search}
                placeholder="Search"
                onChange={handleSearchChange}
                className="w-full h-full outline-none "
              />
              <IconButton
                placeholder
                type="submit"
                variant="text"
                className="p-2 bg-transparent shadow-none bg-[white]"
              >
                <img alt="filter_image" src="/images/search.svg" />
              </IconButton>
            </div>
          </form>
          <Tooltip placeholder content="Filter">
            <Button
              placeholder
              variant="outlined"
              onClick={handleToggleSidebar}
              className="bg-[white] shadow-md rounded-[10px] border-none"
            >
              <img src="/images/filter.svg" alt="filter_image" />
            </Button>
          </Tooltip>
        </div>
        <div data-aos="fade-up">
          <Typography placeholder variant="h2" className="heading">
            {slug}
          </Typography>
        </div>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="flex md:flex-col-reverse items-start justify-between gap-10">
            <div className="w-full grid gap-10 transition-transform duration-300">
              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between gap-y-[60px] md:gap-y-10 sm:gap-y-8 gap-x-[18px] md:gap-x-4">
                {products.map((row, idx) => (
                  <ProductCard key={idx} row={row} />
                ))}
              </div>
              <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
            <Sidebar />
          </div>
        )}
      </div>
      <NewArrival />
      <KeeppInTouch />
    </>
  )
}

export default Category
