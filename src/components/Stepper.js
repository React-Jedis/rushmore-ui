import React from 'react';
import styled from 'styled-components';

const Stepper = ({ stepArray, currentStep, className, layout }) => {
  return (
    <Wrapper className={className} layout={layout}>
      {stepArray.map((step, index) => {
        const completed = currentStep > index;
        return (
          <>
            {index != 0 && (
              <Connector
                key={`connector-${index}`}
                stepArray={stepArray}
                className={completed ? 'completed' : ''}
              />
            )}
            {React.cloneElement(step, {
              key: `step-${index}`,
              completed
            })}
          </>
        );
      })}
    </Wrapper>
  );
};

export default Stepper;

const Wrapper = styled.div`
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${({ layout }) => layout} {
    justify-content: center;
  }
`;

const Connector = styled.div`
  width: ${({ stepArray }) => `${60 / (stepArray.length + 1)}%`};
  max-width: 6.5rem;
  height: 2px;
  background-color: var(--primary-color);
  &.completed {
    background-color: var(--secondary-color);
  }
`;
