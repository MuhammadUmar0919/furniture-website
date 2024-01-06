"use client"

import { Product } from "@/types"
import { Button, Card, Tooltip, Typography } from "@material-tailwind/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { toast } from "sonner"
const headerData = ["Product", "Quantity", "Price"]
function Cart() {
  const [total, setTotal] = useState<number>(0);

  // Use localStorage or provide an empty array as a default value
  const [products, setProducts] = useState<Product[]>(
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carts") || "[]") : []
  );

  const removeProduct = (id: number) => {
    const updatedCart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
    toast.success("Product removed from your cart!!");
  };

  const handleIncrement = (id: number) => {
    const updatedCart = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleDecrement = (id: number) => {
    const existProduct = products.find((product) => product.id === id);

    if (existProduct?.quantity === 1) {
      removeProduct(existProduct.id);
    } else {
      const updatedCart = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });

      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  };

  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotal(total);
  }, [products]);

  return (
    <div className="container grid gap-[70px] md:gap-[50px]">
      <Typography
        data-aos="fade-right"
        placeholder
        variant="h2"
        className="subtitle"
      >
        Cart
      </Typography>
      <div className="grid gap-[40px] md:gap-[30px]">
        <div className="w-[60%] md:w-[80%] flex items-center justify-between">
          {headerData.map((label) => (
            <Typography
            key={label}
              data-aos="fade-left"
              placeholder
              variant="h4"
              className="subject"
            >
              {label}
            </Typography>
          ))}
        </div>
        <div className="grid gap-[26px] md:gap-[22px]">
          {products.length > 0 ? (
            products.map(({ id, images, quantity, price }) => (
              <Card
                key={id}
                placeholder
                data-aos="fade-up"
                className="w-full flex-row items-center justify-between p-5"
              >
                <div className="w-[60%] md:w-[80%] flex items-center justify-between">
                  <Link href={`/details/${id}`}>
                    <img
                      src={images[0]}
                      loading="lazy"
                      alt="profile-picture"
                      className="w-[160px] h-[130px] md:w-[140px] md:h-[110px] rounded-[12px]"
                    />
                  </Link>
                  <div className="flex items-center gap-2">
                    <Button
                      placeholder
                      variant="outlined"
                      className="border-primary text-base"
                      onClick={() => handleDecrement(id)}
                    >
                      -
                    </Button>
                    <Button
                      placeholder
                      variant="outlined"
                      className="border-primary text-base"
                    >
                      {quantity}
                    </Button>
                    <Button
                      placeholder
                      variant="outlined"
                      className="border-primary text-base"
                      onClick={() => handleIncrement(id)}
                    >
                      +
                    </Button>
                  </div>
                  <Typography
                    placeholder
                    textGradient
                    color="blue-gray"
                    className="font-bold text-2xl text-primary"
                  >
                    ${price}
                  </Typography>
                </div>
                <Tooltip placeholder content="Remove">
                  <Button onClick={() => removeProduct(id)} placeholder className="bg-[white] rounded-full p-2">
                    <img
                      loading="lazy"
                      src="/images/close.png"
                      alt="close_image"
                    />
                  </Button>
                </Tooltip>
              </Card>
            ))
          ) : (
            <div className="grid gap-4 justify-center">
              <Typography
                data-aos="fade-left"
                placeholder
                variant="h4"
                className="subject text-primary"
              >
                Cart empty
              </Typography>
              <Link href="/category/Sofa">
                <Button
                  variant="outlined"
                  placeholder
                  className="btn !m-0 !bg-[white] !text-primary border-primary"
                >
                  Products
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Link
            href="/category/Sofa"
            className="text-dark flex items-center gap-2 text-2xl font-bold"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-[-15px] duration-500"
            >
              <g clip-path="url(#clip0_1_989)">
                <path
                  d="M4.7082 16.1478C4.44014 16.4159 4.28955 16.7795 4.28955 17.1587C4.28955 17.5379 4.44014 17.9015 4.7082 18.1696L12.7971 26.2586C13.0668 26.519 13.428 26.6631 13.8029 26.6599C14.1778 26.6566 14.5365 26.5062 14.8016 26.2411C15.0667 25.976 15.2171 25.6174 15.2203 25.2425C15.2236 24.8676 15.0795 24.5064 14.819 24.2367L9.1709 18.5886H28.107C28.4862 18.5886 28.8499 18.438 29.1181 18.1698C29.3862 17.9016 29.5369 17.5379 29.5369 17.1587C29.5369 16.7795 29.3862 16.4158 29.1181 16.1476C28.8499 15.8795 28.4862 15.7288 28.107 15.7288H9.1709L14.819 10.0807C15.0795 9.81105 15.2236 9.44985 15.2203 9.07494C15.2171 8.70003 15.0667 8.34139 14.8016 8.07628C14.5365 7.81116 14.1778 7.66078 13.8029 7.65752C13.428 7.65427 13.0668 7.79839 12.7971 8.05886L4.7082 16.1478Z"
                  fill="#114683"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_989">
                  <rect
                    width="34.3175"
                    height="34.3175"
                    fill="white"
                    transform="matrix(-1 0 0 1 34.3174 0)"
                  />
                </clipPath>
              </defs>
            </svg>
            Continue shopping
          </Link>
          <div className="flex items-center gap-2">
            <h4 className="text-rgba(34, 34, 34, 0.70) text-2xl font-bold">
              Total:
            </h4>
            <span className="text-[28px] font-bold text-dark">
              {total.toLocaleString("en-US", {
                currency: "usd",
                style: "currency",
              })}
            </span>
          </div>
        </div>
      </div>
      <Link href="/payment" className="contents">
        <Button placeholder className="btn !my-0 mx-auto w-2/4">
          Payment
        </Button>
      </Link>
    </div>
  )
}

export default Cart
