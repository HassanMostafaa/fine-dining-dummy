'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Restaurant } from '@/app/types';
import { Text, Title } from '../atoms/Typography';

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.8)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  color: white;
`;

const FeaturedTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #6c5ce7;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;

interface FeaturedRestaurantProps {
  restaurant: Restaurant;
}

export const FeaturedRestaurant = ({ restaurant }: FeaturedRestaurantProps) => {
  return (
    <Container
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        fill
        style={{ objectFit: 'cover' }}
      />
      <Overlay>
        <FeaturedTag>Featured</FeaturedTag>
        <Title style={{ color: 'white', marginBottom: '0.5rem' }}>
          {restaurant.name}
        </Title>
        <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          {restaurant.description}
        </Text>
      </Overlay>
    </Container>
  );
};