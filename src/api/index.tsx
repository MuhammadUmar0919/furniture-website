// api.ts
import axios from "axios"
import { Product } from "@/types"

export const instance = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://16a112ec7cdcde1f.mokky.dev",
})

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await instance.get<Product[]>("/products")
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
