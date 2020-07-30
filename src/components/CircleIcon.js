import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

const CircleIconBase = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const toRemNumber = sizeData => {
  if (sizeData) {
    const parsedRem = sizeData.match(/(.*)rem|(.*)em/i);
    const parsedPx = sizeData.match(/(.*)px/i);
    if (parsedRem) return parseFloat(parsedRem[1]);
    if (parsedPx) return parsedPx[1] / 16;
  }
  return sizeData;
};

const CircleIcon = styled(CircleIconBase)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ outlined, color }) => (outlined ? `1px solid ${color}` : '0px')};
  color: ${({ childrenColor }) => childrenColor};
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    width: ${({ width }) => `${toRemNumber(width) * 0.61}rem`};
    height: ${({ height }) => `${toRemNumber(height) * 0.61}rem`};
  }
`;

CircleIcon.propTypes = {
  width: string,
  height: string,
  color: string,
  borderRadius: string,
  outlined: bool,
  childrenColor: string
};

CircleIcon.defaultProps = {
  width: '3rem',
  height: '3rem',
  completed: 'var(--primary-color)',
  borderRadius: '50%',
  outlined: false,
  childrenColor: '#ffffff'
};

export default CircleIcon;
