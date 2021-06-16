import React from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@material-ui/core'

const SafeEnvironment = () => {
  return (
    <Container>
      <SafeEnvironmentContainer>
        Ambiente Seguro
      </SafeEnvironmentContainer>
    </Container>
  );
}

export default SafeEnvironment;