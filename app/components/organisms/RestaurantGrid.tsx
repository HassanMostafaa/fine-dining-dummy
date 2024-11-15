'use client';

import styled from 'styled-components';
import { Restaurant } from '@/app/types';
import { RestaurantCard } from '../molecules/RestaurantCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  
`;

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

export const RestaurantGrid = ({ restaurants }: RestaurantGridProps) => {
  return (
    <Grid>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </Grid>
  );
};