import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #18181B;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #E4E4E7;
  margin-bottom: 24px;
`;

export default function SignupScreen() {
  return (
    <Container>
      <Title>Sign Up Screen</Title>
    </Container>
  );
} 