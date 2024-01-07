import React from "react"
import Hero from "@/components/pages/home/hero"
import KeeppInTouch from "@/components/keep-in-touch"
import AboutUs from "@/components/pages/home/about-us"
import Tranding from "@/components/pages/home/tranding"
import Categories from "@/components/pages/home/categories"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Categories />
      <Tranding />
      <KeeppInTouch />
    </>
  )
}

export default Home
