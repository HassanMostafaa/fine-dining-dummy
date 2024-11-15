export type MealCategory = 'breakfast' | 'lunch' | 'dinner';
export type Budget = 'affordable' | 'moderate' | 'luxury';
export type Cuisine = 'french' | 'italian' | 'japanese' | 'indian' | 'mediterranean' | 'nordic' | 'mexican';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MealCategory;
  cuisine: Cuisine;
  dietary?: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: MealCategory[];
  budget: Budget;
  rating: number;
  cuisine: Cuisine;
  address: string;
  menu: MenuItem[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}