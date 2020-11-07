  
import React from 'react';
import userPicture from '../../assets/bruno.jpg';
import { Button } from './style';

//Interface of props server button
export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

//Function to create server buttons component and the prinpal with flags
const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button 
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={userPicture} alt="Bruno Carvalho Feitosa" title="Bruno Carvalho Feitosa" />}
    </Button>
  );
};

export default ServerButton;