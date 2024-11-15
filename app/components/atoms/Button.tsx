'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  background: linear-gradient(
    135deg,
    rgb(var(--primary-gradient-start)),
    rgb(var(--primary-gradient-end))
  );
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(Button)`
  background: white;
  color: rgb(var(--primary-gradient-start));
  border: 1px solid rgba(var(--primary-gradient-start), 0.2);
  
  &:hover {
    background: rgba(var(--primary-gradient-start), 0.05);
  }
`;