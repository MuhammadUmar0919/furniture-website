// 'use client'

// // Import necessary modules from Swiper
// import React, { useEffect } from "react";
// import Swiper, { Autoplay } from "swiper";
// import "swiper/swiper-bundle.css";
// import { SwiperSlide } from "swiper/react";

// function Exam() {
//   useEffect(() => {
//     // Initialize Swiper when the component mounts
//     const mySwiper = new Swiper(".swiper-container", {
//       loop: true,
//       modules: [Autoplay],
//       autoplay: {
//         delay: 1000,
//       },
//     });

//     // Cleanup Swiper when the component unmounts
//     return () => {
//       mySwiper.destroy();
//     };
//   }, []);

//   return (
//     <div className="swiper-container">
//       <Swiper>
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//       </Swiper>

//       {/* Apply global styling */}
//       <style jsx global>{`
//         .swiper-container {
//           width: 100%;
//           height: 100%;
//           background-color: #f5f5f5;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Exam;

// // console.log(allProducts)
//   // const fetchData = async () => {
//   //   try {
//   //     // const apiUrl = process.env.REACT_APP_API_URL;
  
//   //     // if (!apiUrl) {
//   //     //   console.error('API URL is not defined in the environment variables.');
//   //     //   return;
//   //     // }
  
//   //     // Iterate through each product in allProducts array
//   //     allProducts.forEach(async (product) => {
//   //       const dataToPost = {
//   //         images: product.images,
//   //         category: product.category,
//   //         name: product.name,
//   //         description: product.description,
//   //         price: product.price,
//   //         rating: product.rating,
//   //         createdAt: product.createdAt
//   //       };
  
//   //       try {
//   //         // Make a separate POST request for each product
//   //         const response = await axios.post('https://16a112ec7cdcde1f.mokky.dev/products', dataToPost);
          
//   //         console.log(`POST request successful for ${product.name}:`, response.data);
//   //       } catch (error) {
//   //         console.error(`Error making POST request for ${product.name}:`, error);
//   //       }
//   //     });
  
//   //   } catch (error) {
//   //     console.error('Error in fetchData function:', error);
//   //   }
//   // };
