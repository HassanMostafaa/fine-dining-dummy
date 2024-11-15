'use client';

import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3436;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #636e72;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #636e72;
  line-height: 1.6;
`;