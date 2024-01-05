import React from "react"
import Image from "next/image"
import { Button, Typography } from "@/common"
import Link from "next/link"

function Hero() {
  return (
    <div className="container flex md:flex-col-reverse items-end md:items-center md:gap-y-[20px] md:text-center justify-between">
      <div
        data-aos="zoom-in-left"
        className="w-1/2 md:w-full flex flex-col items-baseline md:items-center gap-y-[16px]"
      >
        <Typography
          placeholder
          variant="h2"
          className="text-6xl text-brown font-bold"
        >
          Lorem ipsum dolor
        </Typography>
        <Typography placeholder variant="paragraph" className="desc">
          Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate
          quam. Amet bibendum pellentesque molestie morbi nibh aliquam
          consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus
          ultrices.
        </Typography>
        <Link href="/category/Sofa">
          <Button placeholder className="btn">
            Shop now
          </Button>
        </Link>
      </div>
      <Image
        data-aos="zoom-in-right"
        width={480}
        height={320}
        src="/images/hero.png"
        alt="hero_image"
      />
    </div>
  )
}

export default Hero
