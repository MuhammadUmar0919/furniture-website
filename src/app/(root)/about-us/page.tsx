import KeeppInTouch from "@/components/keep-in-touch"
import { Typography } from "@/common"
import React from "react"

function AboutUs() {
  return (
    <>
      <div className="container h-[310px] md:h-[270px] sm:h-[240px]">
        <div
          data-aos="zoom-in"
          className="h-full text-center items-center bg-rgba(17, 70, 131, 0.50) bg-cover bg-no-repeat bg-center rounded-[20px] grid"
          style={{
            backgroundImage: 'url("/images/aboutUsMain.png")',
          }}
        >
          <div className="w-[80%] mx-auto">
            <Typography
              placeholder
              variant="h2"
              className="subtitle text-[white]"
            >
              About us
            </Typography>
            <Typography
              placeholder
              variant="paragraph"
              className="desc text-[white]"
            >
              Lorem ipsum dolor sit amet consectetur. Eu nulla elementum
              vulputate quam. Amet bibendum pellentesque molestie morbi nibh
              aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum
              risus ultrices.Lorem ipsum dolor sit amet consectetur
            </Typography>
          </div>
        </div>
      </div>
      <div className="container flex md:flex-col-reverse justfy-between md:justify-center gap-[90px] md:gap-[40px]">
        <div className="grid gap-[10px]" data-aos="zoom-in-right">
          <Typography placeholder variant="h2" className="heading">
            Lorem ipsum dolor sit amet
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
        <img
          data-aos="zoom-in-left"
          loading="lazy"
          src="/images/aboutUsBlock.png"
          alt="block_image"
          className="w-[480px] h-[400px] md:w-[440px] md:w-full md:h-[360px] rounded-[20px]"
        />
      </div>
      <KeeppInTouch />
    </>
  )
}

export default AboutUs
