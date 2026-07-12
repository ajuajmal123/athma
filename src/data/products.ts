import { Product } from "../types";

export const products: Product[] = [
  {
    id: "turmeric-powder",
    number: "01",
    name: "Athma Turmeric Powder",
    category: "100% Natural",
    description: "Pure & aromatic turmeric powder with rich golden color. Sourced from heritage single-origin farms in Idukki, preserving high curcumin content and natural oils.",
    ingredients: ["100% Organic Turmeric Root"],
    aromaProfile: "Warm, earthy, woody, with a clean aromatic gingery finish.",
    origin: "Idukki Hills, Kerala",
    image: "/images/product_classic_curry.png",
    price: "₹180",
    size: "250g"
  },
  {
    id: "coriander-powder",
    number: "02",
    name: "Athma Coriander Powder",
    category: "100% Natural",
    description: "Pure & aromatic coriander powder with rich, full-bodied flavor. Made from premium sun-dried coriander seeds roasted slowly before cold-milling.",
    ingredients: ["100% Sun-Dried Coriander Seeds"],
    aromaProfile: "Citrusy, floral, sweet herb notes with mild toasted wood accents.",
    origin: "Wayanad Estates, Kerala",
    image: "/images/product_fish_curry.png",
    price: "₹160",
    size: "250g"
  },
  {
    id: "chilli-powder",
    number: "03",
    name: "Athma Chilli Powder",
    category: "100% Natural",
    description: "Pure & aromatic chili powder with intense red color. Slow-milled from handpicked Kashmiri and traditional bird's eye red chilies.",
    ingredients: ["Handpicked Kashmiri Red Chilli"],
    aromaProfile: "Fiery, smoky, slightly sweet with a pungent natural spice kick.",
    origin: "Kumily Hills, Kerala",
    image: "/images/product_chicken_curry.png",
    price: "₹190",
    size: "250g"
  },
  {
    id: "pepper-powder",
    number: "04",
    name: "Athma Pepper Powder",
    category: "100% Natural",
    description: "Pure & aromatic black pepper powder with rich, pungent flavor. Sourced from organic heritage vines in the Western Ghats.",
    ingredients: ["100% Organic Black Pepper"],
    aromaProfile: "Pungent, highly hot, spicy and woody with sharp heat notes.",
    origin: "Western Ghats, Munnar, Kerala",
    image: "/images/product_biryani_mix.png",
    price: "₹220",
    size: "200g"
  }
];
