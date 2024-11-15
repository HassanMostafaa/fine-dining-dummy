'use client';

import styled from 'styled-components';
import { Restaurant } from '@/app/types';
import { FeaturedRestaurant } from '../molecules/FeaturedRestaurant';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

interface FeaturedSectionProps {
  restaurants: Restaurant[];
}

export const FeaturedSection = ({ restaurants }: FeaturedSectionProps) => {
  const featuredRestaurants = restaurants.filter(r => r.featured);

  return (
    <Grid>
      {featuredRestaurants.map((restaurant) => (
        <FeaturedRestaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Grid>
  );
};