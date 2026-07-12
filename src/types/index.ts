export interface Product {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  aromaProfile: string;
  origin: string;
  image: string;
  price: string;
  size: string;
}

export interface Recipe {
  id: string;
  title: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  culturalNote: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  keralaContext: string;
}
