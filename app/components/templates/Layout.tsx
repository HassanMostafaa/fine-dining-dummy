'use client';

import styled from 'styled-components';
import { Utensils } from 'lucide-react';
import { Title } from '../atoms/Typography';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 0;
  border-bottom: 1px solid #f1f2f6;
  margin-bottom: 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2d3436;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header>
        <Container>
          <HeaderContent>
            <Logo>
              <Utensils size={24} />
              <Title style={{ margin: 0 }}>Fine Dining</Title>
            </Logo>
          </HeaderContent>
        </Container>
      </Header>
      <Container>{children}</Container>
    </>
  );
};