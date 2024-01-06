import React from "react"
import { contactData } from "@/data"
import { Button, Checkbox, Typography } from "@/common"

function Contact() {
  return (
    <>
      <div className="container grid gap-10">
        <div>
          <Typography placeholder variant="h2" className="subtitle">
            Contact us
          </Typography>
          <Typography placeholder variant="paragraph" className="desc">
            Lorem ipsum dolor sit amet consectetur. Eu nulla
          </Typography>
        </div>
        <div className="flex md:flex-col-reverse gap-[60px] md:gap-[40px] justify-between md:justify-center">
          <div
            data-aos="zoom-in-right"
            className="grid gap-2 w-2/4 md:w-full content-between"
          >
            <form action="process.php" method="post" className="contents">
              <div className="grid gap-2">
                <label htmlFor="name">Name:</label>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  className="w-full bg-[white] border-[1px] border-solid border-rgba(0, 0, 0, 0.25) rounded-[10px] px-[12px] py-[10px] outline-none"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email..."
                  className="w-full bg-[white] border-[1px] border-solid border-rgba(0, 0, 0, 0.25) rounded-[10px] px-[12px] py-[10px] outline-none"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Type your message..."
                  className="w-full bg-[white] border-[1px] border-solid border-rgba(0, 0, 0, 0.25) rounded-[10px] px-[12px] py-[10px] outline-none"
                ></textarea>

                <Checkbox
                  label="I accept the Terms"
                  defaultChecked
                  color="indigo"
                  crossOrigin="anonymous"
                />
              </div>
              <Button placeholder type="submit" className="btn !mt-0">
                Yuborish
              </Button>
            </form>
          </div>
          <img
            data-aos="zoom-in-left"
            className="w-[460px] h-[540px] md:w-full md:h-[500px] sm:h-[480px] rounded-[20px]"
            loading="lazy"
            src="/images/contactUs.png"
            alt="contact_image"
          />
        </div>
      </div>
      <div className="container grid grid-cols-3 md:grid-cols-2 gap-8">
        {contactData.map(({ img, name, url, desc }, index) => (
          <div key={index} data-aos="fade-up">
            <img
              src={img}
              alt={`${name}_image`}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h4 className="font-bold mb-1 text-2xl">{name}</h4>
            <p className="text-gray-600 text-base mb-2">{desc}</p>
            <a href={url} className="text-blue-500 text-base font-light">
              {url}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Contact
