
import { groq } from "next-sanity";

export const allcategory = groq`*[_type == "category"]`;


export const allProducts = `*[_type == "product"]`;
  
export const four = groq `*[_type == "product'] [0..3]`;