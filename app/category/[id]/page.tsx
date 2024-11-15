'use client';

import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { Layout } from '@/app/components/templates/Layout';
import { RestaurantCard } from '@/app/components/molecules/RestaurantCard';
import { Title, Text } from '@/app/components/atoms/Typography';
import { restaurants } from '@/app/data/restaurants';
import { categories } from '@/app/data/categories';
import Link from 'next/link';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
`;

const RestaurantLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find(c => c.id === id);
  
  const categoryRestaurants = restaurants.filter(restaurant =>
    restaurant.categories.includes(category?.name.toLowerCase() as any)
  );

  if (!category) return <div>Category not found</div>;

  return (
    <Layout>
      <CategoryHeader>
        <Title>{category.name}</Title>
        <Text>{category.description}</Text>
      </CategoryHeader>

      <Grid>
        {categoryRestaurants.map((restaurant) => (
          <RestaurantLink key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
            <RestaurantCard restaurant={restaurant} />
          </RestaurantLink>
        ))}
      </Grid>
    </Layout>
  );
}