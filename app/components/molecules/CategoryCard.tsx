'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { Category } from '@/app/types';
import { Card } from '../atoms/Card';
import { Text, Subtitle } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  background: linear-gradient(
    135deg,
    rgb(var(--secondary-gradient-start)),
    rgb(var(--secondary-gradient-end))
  );
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <StyledCard>
      <ImageContainer>
        <Image
          src={category.image}
          alt={category.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <CardContent>
        <div>
          <Subtitle>{category.name}</Subtitle>
          <Text>{category.description}</Text>
        </div>
        <Link href={`/category/${category.id}`} style={{ marginTop: 'auto' }}>
          <Button whileHover={{ scale: 1.02 }}>
            Explore {category.name} <ArrowRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </StyledCard>
  );
};
