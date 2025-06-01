export const API_BASE_URL = "https://api.example.com";
export const SITE_NAME = "ALX Listing App";

import type { PropertyProps } from "../interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://example.com/image1.jpg",
    discount: "",
  },
  // ... (rest of the data)
];
