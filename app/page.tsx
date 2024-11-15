'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { toast } from 'sonner';
import { Layout } from './components/templates/Layout';
import { RestaurantGrid } from './components/organisms/RestaurantGrid';
import { CategoryGrid } from './components/organisms/CategoryGrid';
import { FeaturedSection } from './components/organisms/FeaturedSection';
import { BudgetSection } from './components/organisms/BudgetSection';
import { Title, Subtitle } from './components/atoms/Typography';
import { restaurants } from './data/restaurants';
import { categories } from './data/categories';
import { MealCategory, Budget, CartItem } from './types';

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: #636e72;
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #74b9ff;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const Hero = styled.div`
  text-align: center;
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<MealCategory | 'all'>('all');
  const [selectedBudget, setSelectedBudget] = useState<Budget | 'all'>('all');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (restaurantId: string, menuItemId: string) => {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const menuItem = restaurant?.menu.find(item => item.id === menuItemId);
    
    if (menuItem) {
      setCart(prev => [...prev, { ...menuItem, quantity: 1 }]);
      toast.success(`${menuItem.name} added to your order!`);
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const categoryMatch = selectedCategory === 'all' || restaurant.categories.includes(selectedCategory as MealCategory);
    const budgetMatch = selectedBudget === 'all' || restaurant.budget === selectedBudget;
    return categoryMatch && budgetMatch;
  });

  return (
    <Layout>
      <Hero>
        <Title>Discover Culinary Excellence</Title>
        <Subtitle>Explore our curated selection of fine dining experiences</Subtitle>
      </Hero>

      <Section>
        <Title>Featured Restaurants</Title>
        <FeaturedSection restaurants={restaurants} />
      </Section>

      <Section>
        <Title>Browse by Category</Title>
        <CategoryGrid categories={categories} />
      </Section>

      <BudgetSection />

      <Section>
        <Title>All Restaurants</Title>
        <Filters>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as MealCategory | 'all')}
          >
            <option value="all">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </Select>
          <Select
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value as Budget | 'all')}
          >
            <option value="all">All Budgets</option>
            <option value="affordable">Affordable</option>
            <option value="moderate">Moderate</option>
            <option value="luxury">Luxury</option>
          </Select>
        </Filters>
        <RestaurantGrid restaurants={filteredRestaurants} />
      </Section>
    </Layout>
  );
}