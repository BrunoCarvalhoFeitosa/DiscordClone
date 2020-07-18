import React from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator } from './style';

//Function to create list of servers
const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      
      <Separator />
      
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={532} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={100} />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;