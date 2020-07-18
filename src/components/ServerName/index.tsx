import React from 'react';
import { Container, Title, ExpandIcon } from './style';

//Function to create server name
const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>Servidor do Bruno</Title>
      <ExpandIcon />
    </Container>
  );
}

export default ServerName;