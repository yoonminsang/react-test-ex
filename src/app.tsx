import React, { useCallback } from 'react';
import styled from 'styled-components';
import CountEx from './components/count-ex';
import FormEx from './components/form-ex';

const Wrapper = styled.div`
  margin: 10px;
`;

const Margin = styled.div`
  height: 50px;
`;

const App: React.FC = () => {
  const onLogin = useCallback(async (email: string, password: string) => {
    const action = await Promise.resolve(`email:${email} password:${password}`);
    console.log(action);
  }, []);

  return (
    <Wrapper>
      앱
      <CountEx />
      <Margin />
      <FormEx onLogin={onLogin} />
    </Wrapper>
  );
};

export default App;
