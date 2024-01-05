import React from "react"
import Link from "next/link"
import { Button, Typography } from "@/common"

function AboutUs() {
  return (
    <div data-aos="fade-up" className="container flex gap-4">
      <div className="flex flex-col gap-5 text-center items-center">
        <Typography placeholder variant="h2" className="subtitle">
          About Us
        </Typography>
        <div className="grid gap-y-9 md:gap-y-6 sm:gap-y-3">
          <Typography placeholder variant="paragraph" className="desc">
            Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate
            quam. Amet bibendum pellentesque molestie morbi nibh aliquam
            consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus
            ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum
            vulputate quam. Amet bibendum pellentesque molestie morbi nibh
            aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum
            risus ultrices.
          </Typography>
          <Typography placeholder variant="paragraph" className="desc">
            Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate
            quam. Amet bibendum pellentesque molestie morbi nibh aliquam
            consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus
            ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum
            vulputate quam. Amet bibendum pellentesque molestie morbi nibh
            aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum
            risus ultrices.
          </Typography>
        </div>
        <Link href="/about-us">
          <Button placeholder className="btn">
            Read more
          </Button>
        </Link>
      </div>
      <img src="/images/aboutUsLamp.png" alt="about_us_lamp" loading='lazy' />
    </div>
  )
}

export default AboutUs
