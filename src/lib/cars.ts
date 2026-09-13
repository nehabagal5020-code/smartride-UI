import suvImage from "@/assets/car-suv.jpg";
import sportImage from "@/assets/car-sport.jpg";
import sedanImage from "@/assets/car-sedan.jpg";

export type Car = {
  id: string;
  name: string;
  category: "SUV" | "Sports" | "Sedan";
  image: string;
  price: number;
  seats: number;
  transmission: string;
  fuel: string;
  rating: number;
  reviews: number;
};

export const cars: Car[] = [
  { id: "atlas-suv", name: "Atlas Urban SUV", category: "SUV", image: suvImage, price: 89, seats: 5, transmission: "Automatic", fuel: "Hybrid", rating: 4.9, reviews: 128 },
  { id: "volta-gt", name: "Volta GT", category: "Sports", image: sportImage, price: 149, seats: 2, transmission: "Automatic", fuel: "Electric", rating: 4.8, reviews: 94 },
  { id: "regent-sedan", name: "Regent Executive", category: "Sedan", image: sedanImage, price: 109, seats: 5, transmission: "Automatic", fuel: "Petrol", rating: 4.9, reviews: 176 },
  { id: "atlas-suv-plus", name: "Atlas Touring", category: "SUV", image: suvImage, price: 96, seats: 5, transmission: "Automatic", fuel: "Hybrid", rating: 4.7, reviews: 82 },
  { id: "volta-gt-s", name: "Volta GT S", category: "Sports", image: sportImage, price: 169, seats: 2, transmission: "Automatic", fuel: "Electric", rating: 5, reviews: 61 },
  { id: "regent-comfort", name: "Regent Comfort", category: "Sedan", image: sedanImage, price: 99, seats: 5, transmission: "Automatic", fuel: "Petrol", rating: 4.8, reviews: 143 },
];