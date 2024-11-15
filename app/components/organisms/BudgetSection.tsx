'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { BudgetSlider } from '../atoms/BudgetSlider';
import { Title, Text } from '../atoms/Typography';

const Container = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
`;

const SliderContainer = styled.div`
  margin: 2rem 0;
`;

const BudgetDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #6c5ce7;
  font-weight: 500;
`;

export const BudgetSection = () => {
  const [budget, setBudget] = useState([50, 200]);

  return (
    <Container>
      <Title>Set Your Budget</Title>
      <Text>Adjust the slider to find restaurants within your price range</Text>
      <SliderContainer>
        <BudgetSlider
          value={budget}
          onValueChange={setBudget}
          min={0}
          max={500}
          step={10}
        />
        <BudgetDisplay>
          <span>${budget[0]}</span>
          <span>${budget[1]}</span>
        </BudgetDisplay>
      </SliderContainer>
    </Container>
  );
};