export interface Product {
  id: number;
  name: string;
  category: "Serum" | "Cream";
  description: string;
  price: string;
  image: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    description:
      "A powerful antioxidant serum that brightens and evens skin tone while protecting against environmental damage.",
    price: "$89",
    image:
      "https://images.pexels.com/photos/3738364/pexels-photo-3738364.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Brightens complexion", "Reduces dark spots", "Boosts collagen"],
  },
  {
    id: 2,
    name: "Hyaluronic Acid Hydration Serum",
    category: "Serum",
    description:
      "Intensive hydration serum that plumps and smooths skin with deep moisture retention.",
    price: "$75",
    image:
      "https://images.pexels.com/photos/3738361/pexels-photo-3738361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Deep hydration", "Plumps skin", "Smooths fine lines"],
  },
  {
    id: 3,
    name: "Retinol Renewal Serum",
    category: "Serum",
    description:
      "Advanced anti-aging serum that promotes cell turnover and reveals younger-looking skin.",
    price: "$95",
    image:
      "https://images.pexels.com/photos/3738371/pexels-photo-3738371.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Reduces wrinkles", "Improves texture", "Firms skin"],
  },
  {
    id: 4,
    name: "Niacinamide Balancing Serum",
    category: "Serum",
    description:
      "Gentle yet effective serum that minimizes pores and balances oil production.",
    price: "$68",
    image:
      "https://images.pexels.com/photos/3738340/pexels-photo-3738340.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Minimizes pores", "Controls oil", "Calms irritation"],
  },
  {
    id: 5,
    name: "Rich Moisturizing Cream",
    category: "Cream",
    description:
      "Luxurious cream that provides 24-hour hydration with a velvety, non-greasy finish.",
    price: "$85",
    image:
      "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Long-lasting moisture", "Nourishes deeply", "Softens skin"],
  },
  {
    id: 6,
    name: "Anti-Aging Night Cream",
    category: "Cream",
    description:
      "Intensive overnight treatment that works while you sleep to repair and rejuvenate skin.",
    price: "$110",
    image:
      "https://images.pexels.com/photos/3738366/pexels-photo-3738366.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Overnight repair", "Reduces signs of aging", "Restores elasticity"],
  },
  {
    id: 7,
    name: "SPF Daily Protection Cream",
    category: "Cream",
    description:
      "Lightweight daily cream with broad-spectrum SPF 30 for everyday sun protection.",
    price: "$65",
    image:
      "https://images.pexels.com/photos/3738362/pexels-photo-3738362.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["UV protection", "Lightweight feel", "Prevents sun damage"],
  },
  {
    id: 8,
    name: "Soothing Recovery Cream",
    category: "Cream",
    description:
      "Calming cream enriched with chamomile and aloe for sensitive and irritated skin.",
    price: "$72",
    image:
      "https://images.pexels.com/photos/3738342/pexels-photo-3738342.jpeg?auto=compress&cs=tinysrgb&w=1200",
    benefits: ["Soothes irritation", "Reduces redness", "Gentle formula"],
  },
];


