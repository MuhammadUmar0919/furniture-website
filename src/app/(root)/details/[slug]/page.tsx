// Importing necessary dependencies and components
"use client"
import React, { useState, useEffect } from "react"
import { instance } from "@/api"
import Gallery from "@/components/pages/details"
import { Button, Rating, Spinner, Typography } from "@material-tailwind/react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"
import { Product } from "@/types"
import { blockData } from "@/data"
import KeeppInTouch from "@/components/keep-in-touch"

function Details() {
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(0)
  const [item, setItem] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem("carts") || "[]")
  )

  // Fetch data for the current product
  const fetchData = async () => {
    try {
      const response = await instance.get(`/products/${slug}`)
      setItem(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  // Update product quantity when slug changes
  useEffect(() => {
    fetchData()
  }, [slug])

  // Initialize products and quantity from localStorage on component mount
  useEffect(() => {
    const storedProducts: Product[] = JSON.parse(
      localStorage.getItem("carts") || "[]"
    )

    setProducts(storedProducts)

    const storedItem: Product | undefined = storedProducts.find(
      (product: Product) => product.id === Number(slug)
    )

    if (storedItem) {
      setQuantity(storedItem.quantity)
    }
  }, [slug])

  const removeProduct = (id: number) => {
    const updatedCart = products.filter((product) => product.id !== id)
    localStorage.setItem("carts", JSON.stringify(updatedCart))
    setProducts(updatedCart)
    toast.success("Product removed to your cart!!")
  }

  // Handle click event for adding product to the cart
  const handleClick = () => {
    const isExistProduct = products.find((c) => c.id === item?.id)

    if (isExistProduct) {
      // If product already exists in the cart, update its quantity
      const updatedData = products.map((c) =>
        c.id === item?.id ? { ...c, quantity: c.quantity + 1 } : c
      )
      localStorage.setItem("carts", JSON.stringify(updatedData))
      setProducts(updatedData)
      setQuantity(isExistProduct.quantity + 1)
    } else {
      // If product is not in the cart, add it with quantity 1
      const data = [...products, { ...item, quantity: 1 }]
      // setProducts(data)
      localStorage.setItem("carts", JSON.stringify(data))
      setQuantity(1)
      toast.success("Product added to your cart!!")
    }
  }

  // Increment product quantity
  const handleIncrement = (id: number) => {
    const isExistProduct = products.find((c) => c.id === item?.id)

    if (isExistProduct) {
      // If product already exists in the cart, update its quantity
      const updatedData = products.map((c) =>
        c.id === item?.id ? { ...c, quantity: c.quantity + 1 } : c
      )
      localStorage.setItem("carts", JSON.stringify(updatedData))
      setProducts(updatedData)
      setQuantity(isExistProduct.quantity + 1)
    } else {
      // If product is not in the cart, add it with quantity 1
      const data = [...products, { ...item, quantity: 1 }]
      localStorage.setItem("carts", JSON.stringify(data))
      setProducts(data)
      setQuantity(1)
      toast.success("Product added to your cart!!")
    }
  }

  // Decrement product quantity or remove if quantity is 1
  const handleDecrement = (id: number) => {
    const existProduct = products.find((product) => product.id === id)

    if (existProduct?.quantity === 1) {
      removeProduct(existProduct.id)
      setQuantity(0)
    } else {
      const updatedCart = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      localStorage.setItem("carts", JSON.stringify(updatedCart))
      setProducts(updatedCart)
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  // Handle change in product rating
  const handleRatingChange = async (productId: number, newRating: number) => {
    try {
      await instance.patch(
        `https://16a112ec7cdcde1f.mokky.dev/products/${productId}`,
        {
          rating: newRating,
        }
      )
      await fetchData()
    } catch (error) {
      console.error("Error updating product rating:", error)
    }
  }

  if (!item) {
    return <Spinner className="h-16 w-16 text-primary" />;
  }

  return (
    <>
      <div className="container overflow-hidden flex md:flex-col justify-between md:justify-center gap-[100px]">
      <Gallery images={item?.images || []} />
        <div className="flex flex-col gap-[40px] md:gap-[35px] sm:gap-[30px]">
          <div className="grid gap-4 md:gap-[25px] sm:gap-[20px]">
            <Typography placeholder variant="h2" className="subtitle">
              {item.name}
            </Typography>
            <Typography placeholder variant="paragraph" className="desc">
              {item.description}
              Lorem ipsum dolor sit amet consectetur. Eu nulla elementum
              vulputate quam. Amet bibendum pellentesque molestie morbi nibh
              aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum
              risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla
              elementum vulputate quam. Amet bibendum pellentesque molestie
              morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit
              a ipsum risus ultrices.
            </Typography>

            <div className="flex items-center justify-between">
              <Rating
                placeholder
                ratedColor="amber"
                value={item.rating}
                onChange={(value) => handleRatingChange(item.id, value)}
              />
              {blockData.map((block, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-[#787A80] text-xl"
                >
                  {block.icon.map((icon, iconIndex) => (
                    <span key={iconIndex}>{icon}</span>
                  ))}
                  <p>{block.count}</p>
                  <p>{block.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                placeholder="true"
                variant="outlined"
                className="border-primary text-base"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </Button>
              <Button
                placeholder="true"
                variant="outlined"
                className="border-primary text-base"
              >
                {quantity}
              </Button>
              <Button
                placeholder="true"
                variant="outlined"
                className="border-primary text-base"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </Button>
            </div>
            <Link href="/cart">
              <Button
                placeholder="true"
                onClick={handleClick}
                className="rounded-[28px] p-2 bg-lightCyan shadow-5.671px 11.341px 14.177px 0px rgba(17, 70, 131, 0.25)"
              >
                <img src="/images/cart.svg" alt="cart_image" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <KeeppInTouch />
    </>
  )
}

export default Details
