'use client';

import styled from 'styled-components';
import * as Slider from '@radix-ui/react-slider';

const StyledSlider = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  touch-action: none;
`;

const Track = styled(Slider.Track)`
  background-color: #e2e8f0;
  position: relative;
  flex-grow: 1;
  height: 3px;
  border-radius: 9999px;
`;

const Range = styled(Slider.Range)`
  position: absolute;
  background-color: #6c5ce7;
  height: 100%;
  border-radius: 9999px;
`;

const Thumb = styled(Slider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6c5ce7;
  }
`;

interface BudgetSliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const BudgetSlider = ({
  value,
  onValueChange,
  min = 0,
  max = 500,
  step = 10
}: BudgetSliderProps) => {
  return (
    <StyledSlider
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
    >
      <Track>
        <Range />
      </Track>
      <Thumb />
    </StyledSlider>
  );
};