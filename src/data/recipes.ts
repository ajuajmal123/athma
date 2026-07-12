import { Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: "malabar-fish-curry",
    title: "Malabar Fish Curry (Kudampuli Style)",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "4 people",
    difficulty: "Medium",
    description: "A traditional red fish curry cooked in a clay pot (manchatti), infused with the smoky sourness of Kudampuli (Malabar tamarind) and the clean aroma of fresh curry leaves.",
    image: "/images/recipe_fish_curry.png",
    ingredients: [
      "500g Fresh Seer Fish or Pomfret (steaked)",
      "3 tbsp Athma Malabar Fish Curry Masala",
      "3-4 pieces Kudampuli (Malabar Tamarind), soaked in warm water",
      "10-12 Shallots, finely sliced",
      "2 Green Chilies, slit",
      "1 tbsp Fresh Ginger-Garlic paste",
      "A sprig of fresh Curry Leaves",
      "3 tbsp Virgin Coconut Oil",
      "1/2 tsp Mustard seeds & Fenugreek seeds"
    ],
    steps: [
      "Heat coconut oil in a traditional clay pot (manchatti). Splutter mustard seeds and fenugreek seeds.",
      "Add sliced shallots, ginger-garlic paste, curry leaves, and green chilies. Sauté until shallots turn soft and translucent.",
      "Mix Athma Malabar Fish Curry Masala with a little water to form a smooth paste. Add this paste to the pot and sauté on low heat until the raw aroma disappears and oil begins to separate.",
      "Pour in 2 cups of water along with the soaked Kudampuli and its soaking water. Bring to a boil, then add salt to taste.",
      "Gently slide in the fish pieces, cover, and simmer on medium-low heat for 12-15 minutes until the curry thickens slightly and the fish is cooked.",
      "Drizzle a teaspoon of fresh raw coconut oil over the top and throw in a few fresh curry leaves. Rest covered for 30 minutes before serving so the flavors develop."
    ],
    culturalNote: "In Kerala, this curry is traditionally eaten the next day, as the fish absorbs the sourness of the Kudampuli and the spice notes deepen in the clay pot."
  },
  {
    id: "kerala-chicken-curry",
    title: "Nadan Kerala Chicken Curry",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: "6 people",
    difficulty: "Medium",
    description: "A rustic chicken curry cooked with slow-roasted coconut and freshly ground Athma spices, yielding a rich, dark gravy that pairs perfectly with Appam or Porotta.",
    image: "/images/recipe_chicken_curry.png",
    ingredients: [
      "1kg Chicken, bone-in pieces",
      "4 tbsp Athma Chicken Curry Blend",
      "1 cup Grated Fresh Coconut",
      "2 large Onions, finely sliced",
      "1.5 tbsp Ginger-Garlic paste",
      "2 ripe Tomatoes, chopped",
      "3 tbsp Coconut Oil",
      "Fresh Curry Leaves & Coriander leaves",
      "1/2 tsp Turmeric powder"
    ],
    steps: [
      "In a dry pan, roast the grated coconut with a few curry leaves on medium heat, stirring constantly until it turns a deep golden brown. Grind this to a smooth, warm paste (Thenga Varutharachathtu) without adding much water. Set aside.",
      "Heat coconut oil in a heavy-bottomed pan or uruli. Sauté sliced onions until they turn a deep brown color.",
      "Add ginger-garlic paste and sauté until fragrant, then add tomatoes and cook until soft and mushy.",
      "Reduce heat, add Athma Chicken Curry Blend and turmeric powder, stirring quickly for 1 minute to roast the spices.",
      "Add chicken pieces and salt. Toss well to coat the chicken in the spice base. Cover and let it cook in its own juices for 10 minutes.",
      "Add 1 cup of warm water and the ground roasted coconut paste. Mix thoroughly. Simmer covered for another 15-20 minutes until the chicken is tender and the oil floats on top.",
      "Garnish with a handful of fresh curry leaves and serve hot with flaky Malabar Porotta."
    ],
    culturalNote: "This style of curry uses the 'Varutharacha' technique—roasting grated coconut to a deep amber color before grinding it. It represents the ultimate culinary warmth of Central Kerala homes."
  },
  {
    id: "sunday-family-curry",
    title: "Sunday Family Egg & Potato Roast",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "4 people",
    difficulty: "Easy",
    description: "The comforting weekend breakfast classic. Hard-boiled eggs and tender potatoes cooked in a thick, sweet onion roast spiced with Athma Classic Curry Powder.",
    image: "/images/recipe_family_curry.png",
    ingredients: [
      "4 Hard-boiled Eggs, peeled and lightly slit",
      "2 Potatoes, boiled and cubed",
      "2 tbsp Athma Classic Curry Powder",
      "3 large Onions, thinly sliced",
      "1 tbsp Ginger-Garlic paste",
      "1 Tomato, chopped",
      "2 tbsp Coconut Oil",
      "1/2 tsp Mustard seeds",
      "A handful of Fresh Curry Leaves"
    ],
    steps: [
      "Heat coconut oil in a pan, splutter mustard seeds, and sauté onions with a pinch of salt until caramelized and soft.",
      "Add ginger-garlic paste and curry leaves. Sauté until the raw smell fades.",
      "Add tomatoes and cook until pulpy. Stir in Athma Classic Curry Powder, roasting it on low heat for a minute.",
      "Add the cubed potatoes and toss well with the onion-masala base. Pour in 1/2 cup of warm water and simmer for 5 minutes.",
      "Add the boiled eggs, basting them gently with the thick gravy. Cover and cook on low heat for 5 minutes until dry and rich.",
      "Serve warm with hot Appam or Puttu for a classic Kerala Sunday breakfast."
    ],
    culturalNote: "Nothing defines a Kerala home on a Sunday morning like the steam rising from hot Appams paired with this rich, caramelized egg roast."
  }
];
