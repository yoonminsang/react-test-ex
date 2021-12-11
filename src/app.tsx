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
  const onLogin = useCallback((email: string, password: string) => {
    console.log(email, password);
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
