'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import styled from 'styled-components';
import { toast } from 'sonner';
import { Layout } from '@/app/components/templates/Layout';
import { Title, Subtitle, Text } from '@/app/components/atoms/Typography';
import { restaurants } from '@/app/data/restaurants';
import { MenuItem } from '@/app/types';
import { Star, MapPin } from 'lucide-react';

const Hero = styled.div`
  position: relative;
  height: 400px;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
`;

const MenuSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const MenuItem = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const MenuImage = styled.div`
  position: relative;
  height: 200px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #6c5ce7;
`;

const OrderButton = styled.button`
  background: linear-gradient(
    135deg,
    rgb(var(--primary-gradient-start)),
    rgb(var(--primary-gradient-end))
  );
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const InfoBar = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  color: #636e72;
`;

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === id);

  const handleOrder = (item: MenuItem) => {
    toast.success(`Added ${item.name} to your order!`);
  };

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <Layout>
      <Hero>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        <HeroContent>
          <Title style={{ color: 'white' }}>{restaurant.name}</Title>
          <InfoBar>
            <span>
              <Star size={16} style={{ display: 'inline', marginRight: '4px' }} />
              {restaurant.rating}
            </span>
            <span>
              <MapPin size={16} style={{ display: 'inline', marginRight: '4px' }} />
              {restaurant.address}
            </span>
          </InfoBar>
        </HeroContent>
      </Hero>

      <Text>{restaurant.description}</Text>

      <Subtitle style={{ marginTop: '2rem' }}>Menu</Subtitle>
      <MenuSection>
        {restaurant.menu.map((item) => (
          <MenuItem key={item.id}>
            <MenuImage>
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </MenuImage>
            <Subtitle>{item.name}</Subtitle>
            <Text>{item.description}</Text>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <Price>${item.price}</Price>
              <OrderButton onClick={() => handleOrder(item)}>
                Add to Order
              </OrderButton>
            </div>
          </MenuItem>
        ))}
      </MenuSection>
    </Layout>
  );
}