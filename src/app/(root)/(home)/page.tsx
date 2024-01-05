import React from "react"
import Hero from "@/components/pages/home/hero"
import AboutUs from "@/components/pages/home/about-us"
import Categories from "@/components/pages/home/categories"
import KeeppInTouch from "@/components/keep-in-touch"
import Tranding from "@/components/pages/home/tranding"

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
