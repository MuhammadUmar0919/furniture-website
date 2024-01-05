import React from "react"
import { Button, Typography } from "@/common"

function KeeppInTouch() {
  return (
    <div data-aos="fade-zoom-in" className="container grid gap-14">
      <div data-aos="fade-up" className='text-center'>
        <Typography placeholder variant="h2" className="subtitle">
          Keep in touch
        </Typography>
        <Typography placeholder variant="paragraph" className="desc">
          Lorem ipsum dolor sit amet consectetur
        </Typography>
      </div>
      <div style={{ backgroundImage: `url(/images/keepInTouch.png)` }} className="p-[90px] md:p-[70px] sm:py-[50px] sm:px-[20px] rounded-[60px] bg-rgba(17, 70, 131, 0.50) bg-cover bg-no-repeat bg-center">
        <div className="relative flex w-full sm:grid gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-[white] px-4 min-w-0 w-full h-[70px] md:h-[60px] sm:h-[50px] rounded-lg border-none outline-none"
          />
          <Button
            size="lg"
            placeholder
            className="!absolute sm:!static right-3 top-3 md:right-1.5 md:top-1.5 sm:right-1 sm:top-1 rounded bg-primary"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}

export default KeeppInTouch
