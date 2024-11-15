'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { Restaurant } from '@/app/types';
import { Card } from '../atoms/Card';
import { Text, Subtitle } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing:border-box;
  background: linear-gradient(
    135deg,
    rgb(var(--accent-gradient-start)),
    rgb(var(--accent-gradient-end))
  );
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span<{ type?: string }>`
  background: ${(props) => {
    switch (props.type) {
      case 'cuisine':
        return '#e9d5ff';
      case 'budget':
        return '#dbeafe';
      default:
        return '#f1f2f6';
    }
  }};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: ${(props) => {
    switch (props.type) {
      case 'cuisine':
        return '#7e22ce';
      case 'budget':
        return '#1e40af';
      default:
        return '#636e72';
    }
  }};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fdcb6e;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <StyledCard>
      <ImageContainer>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <CardContent>
        <div>
          <Subtitle>{restaurant.name}</Subtitle>
          <Text>{restaurant.description}</Text>
        </div>
        <Tags>
          <Tag type="cuisine">{restaurant.cuisine}</Tag>
          <Tag type="budget">{restaurant.budget}</Tag>
          <Rating>
            <Star size={16} fill="#fdcb6e" />
            {restaurant.rating}
          </Rating>
        </Tags>
        <Link
          href={`/restaurant/${restaurant.id}`}
          style={{ marginTop: 'auto' }}
        >
          <Button whileHover={{ scale: 1.02 }}>
            View Menu <ArrowRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </StyledCard>
  );
};
