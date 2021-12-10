import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const CountEx: React.FC = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <Wrapper>
      <button type="button" onClick={onIncrease}>
        increase
      </button>
      <button type="button" onClick={onDecrease}>
        decrease
      </button>
      <div data-testid="count">{count}</div>
    </Wrapper>
  );
};

export default CountEx;
