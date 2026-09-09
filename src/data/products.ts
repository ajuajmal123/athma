import { Product } from "../types";

export const products: Product[] = [
  {
    id: "chilli-powder",
    number: "01",
    name: "Chilli Powder",
    category: "100% Natural",
    description: "Pure & aromatic chili powder with intense red color. Slow-milled from handpicked traditional red chilies.",
    ingredients: ["100% Red Chilli"],
    aromaProfile: "Fiery, smoky, slightly sweet with a pungent natural spice kick.",
    origin: "Kumily Hills, Kerala",
    image: "/products/chillipowder.jpeg",
    price: "₹190",
    size: "250g"
  },
  {
    id: "coriander-powder",
    number: "02",
    name: "Coriander Powder",
    category: "100% Natural",
    description: "Pure & aromatic coriander powder with rich, full-bodied flavor. Made from premium sun-dried coriander seeds roasted slowly before cold-milling.",
    ingredients: ["100% Sun-Dried Coriander Seeds"],
    aromaProfile: "Citrusy, floral, sweet herb notes with mild toasted wood accents.",
    origin: "Wayanad Estates, Kerala",
    image: "/products/corianderpowder.jpeg",
    price: "₹160",
    size: "250g"
  },
  {
    id: "kashmiri-chilli",
    number: "03",
    name: "Kashmiri Chilli",
    category: "100% Natural",
    description: "Vibrant red Kashmiri chili powder known for its mild heat and intense color, perfect for adding a rich hue without overwhelming heat.",
    ingredients: ["100% Kashmiri Red Chilli"],
    aromaProfile: "Mildly pungent, fruity, and sweet earthy notes.",
    origin: "Kumily Hills, Kerala",
    image: "/products/kashmirichilli.jpeg",
    price: "₹250",
    size: "250g"
  },
  {
    id: "pepper-powder",
    number: "04",
    name: "Peper Powder",
    category: "100% Natural",
    description: "Pure & aromatic black pepper powder with rich, pungent flavor. Sourced from organic heritage vines in the Western Ghats.",
    ingredients: ["100% Organic Black Pepper"],
    aromaProfile: "Pungent, highly hot, spicy and woody with sharp heat notes.",
    origin: "Western Ghats, Munnar, Kerala",
    image: "/products/peperpowder.jpeg",
    price: "₹220",
    size: "200g"
  },
  {
    id: "turmeric-powder",
    number: "05",
    name: "Turmeric Powder",
    category: "100% Natural",
    description: "Pure & aromatic turmeric powder with rich golden color. Sourced from heritage single-origin farms in Idukki, preserving high curcumin content and natural oils.",
    ingredients: ["100% Organic Turmeric Root"],
    aromaProfile: "Warm, earthy, woody, with a clean aromatic gingery finish.",
    origin: "Idukki Hills, Kerala",
    image: "/products/turmericpowder.jpeg",
    price: "₹180",
    size: "250g"
  }
];
