export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "alchemy-of-slow-grinding",
    title: "The Alchemy of Slow-Grinding Spices",
    tag: "Craftsmanship",
    date: "July 10, 2026",
    readTime: "5 min read",
    summary: "How modern high-speed industrial mills scorch delicate spice oils, and why our slow, temperature-controlled heritage technique preserves authentic flavor.",
    author: "Madhavan Nair, Master Blender",
    image: "/images/clay_mortar_texture.png",
    content: [
      "Walk into any mass-market spice packaging plant and you will be met with a deafening roar and a blast of hot air. Modern industrial steel hammer mills grind spices at speeds exceeding 3,000 RPM. While highly efficient for output, this process generates intense heat—often reaching temperatures above 80°C (176°F).",
      "Spices derive their distinct aroma, taste, and therapeutic qualities from volatile essential oils (like piperine in black pepper, curcumin in turmeric, and cineole in cardamom). These oils are highly volatile and begin to evaporate or scorch at high temperatures. In short, high-speed industrial grinding cooks the spice before it ever reaches your kitchen, leaving behind a flat, muted powder.",
      "At Athma, we believe in slow gastronomy. We utilize state-of-the-art mills that operate at under 400 RPM, fitted with custom cooling jackets that maintain a constant, low temperature of 25°C (77°F). This slow, gentle crushing process mimics the action of a traditional stone mortar and pestle, ensuring that 100% of the natural essential oils remain sealed within the cell structures of the powder.",
      "When you open a bag of Athma spices and add it to hot coconut oil, you aren't just heating powder—you are releasing essential oils that have been carefully preserved from the soil to the seal. The sudden bloom of aroma is proof of the slow-grinding alchemy.",
    ],
  },
  {
    id: "2",
    slug: "sourcing-kumily-hills",
    title: "Sourcing from Kumily Hills: Saffron, Cardamom, and Black Gold",
    tag: "Heritage Sourcing",
    date: "June 28, 2026",
    readTime: "7 min read",
    summary: "A journey through the mist-shrouded elevations of Idukki district, partnering with heritage growers who harvest spice crops at peak essential oil content.",
    author: "Rohan Kuruvilla, Sourcing Lead",
    image: "/images/brand_story_heritage.png",
    content: [
      "Kumily, a tranquil town nestled in the Cardamom Hills of Idukki, sits at an elevation of 900 meters above sea level. Here, the unique microclimate—cool mountain air, rich organic soil, and heavy monsoon rains—creates the absolute perfect conditions for cultivating heirloom spice varieties.",
      "We spent three months traveling through these hill tracts, meeting with smallholder families who have farmed the same plots for generations. Unlike commercial farms that harvest prematurely to meet trading schedules, these heritage growers wait for 'peak oil content'.",
      "For instance, our green cardamom pods are harvested only during the third and fourth pickings, when the pods are plump, dark green, and brimming with aromatic cineole oil. Similarly, our black pepper (historically known as 'Black Gold') is left on the vine until the lower berries turn a bright crimson, signaling the highest concentration of spicy piperine.",
      "By establishing direct-trade partnerships with these growers, we ensure they receive a premium above market rate, helping to sustain traditional farming practices. It is a slow, meticulous way to source, but one smell of our single-origin pepper or cardamom will explain why it is the only way for Athma.",
    ],
  },
  {
    id: "3",
    slug: "why-single-origin-matters",
    title: "Why Single-Origin Spices Make the Perfect Curry",
    tag: "Culinary Science",
    date: "June 14, 2026",
    readTime: "4 min read",
    summary: "Mass-market spices are often a blend of cheap crops from multiple countries. Discover how single-origin crops bring terroir, depth, and character to your cooking.",
    author: "Chef Priya Raghavan",
    image: "/images/recipe_chicken_curry.png",
    content: [
      "In the wine world, 'terroir' is everything—the combination of soil, climate, and topography that gives a grape its unique character. Spices are no different. A chili grown in the dry red soil of Guntur has a vastly different heat profile, sweetness, and color than one grown in the wet valleys of Kerala.",
      "Unfortunately, standard supermarket spices completely erase this terroir. Commercial brands blend cheap crops from different regions, countries, and harvest years to achieve a standardized, low-cost product. The result is a powder that lacks character and depth, requiring you to use double or triple the quantity to get any flavor.",
      "Athma spices are strictly single-origin and estate-specific. Our Malabar Ginger comes solely from a single estate in Wayanad, and our Kashmiri Chili is sourced purely from traditional family farms in the valley. This single-origin purity means you experience the true terroir of the spice.",
      "When cooking a traditional chicken or fish curry, single-origin spices layer the flavors cleanly. Instead of a muddy, uniform heat, you get top notes of citrusy ginger, a middle of sweet, smoky heat from the chili, and a lingering, warm base of slow-ground coriander. It turns home cooking into a premium culinary experience.",
    ],
  },
];
