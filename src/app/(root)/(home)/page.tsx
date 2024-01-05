'use client'

// import React, { useEffect } from "react"
import Hero from "@/components/pages/home/hero"
import AboutUs from "@/components/pages/home/about-us"
import Categories from "@/components/pages/home/categories"
import KeeppInTouch from "@/components/keep-in-touch"
// import { allProducts } from "@/data"
// import axios from 'axios'
import Tranding from "@/components/pages/home/tranding"
import Exam from "@/components/exm"

export function Home() {
  // console.log(allProducts)
  // const fetchData = async () => {
  //   try {
  //     // const apiUrl = process.env.REACT_APP_API_URL;
  
  //     // if (!apiUrl) {
  //     //   console.error('API URL is not defined in the environment variables.');
  //     //   return;
  //     // }
  
  //     // Iterate through each product in allProducts array
  //     allProducts.forEach(async (product) => {
  //       const dataToPost = {
  //         images: product.images,
  //         category: product.category,
  //         name: product.name,
  //         description: product.description,
  //         price: product.price,
  //         rating: product.rating,
  //         createdAt: product.createdAt
  //       };
  
  //       try {
  //         // Make a separate POST request for each product
  //         const response = await axios.post('https://16a112ec7cdcde1f.mokky.dev/products', dataToPost);
          
  //         console.log(`POST request successful for ${product.name}:`, response.data);
  //       } catch (error) {
  //         console.error(`Error making POST request for ${product.name}:`, error);
  //       }
  //     });
  
  //   } catch (error) {
  //     console.error('Error in fetchData function:', error);
  //   }
  // };
  return (
    <>
    {/* <button onClick={fetchData}>All renders</button> */}
      <Hero />
      <AboutUs />
      <Categories />
      <Tranding />
      <KeeppInTouch />
    {/* <Exam /> */}
    </>
  )
}

export default Home
