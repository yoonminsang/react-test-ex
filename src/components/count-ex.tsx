import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const CountEx: React.FC = () => {
  const [count, setCount] = useState(0);
  const onIncrease = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const onDecrease = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
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
