'use client';

import styled from 'styled-components';
import { Category } from '@/app/types';
import { CategoryCard } from '../molecules/CategoryCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;  
  
`;

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <Grid>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  );
};
