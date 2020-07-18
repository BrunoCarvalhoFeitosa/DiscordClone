  
import React from 'react';
import Logo from '../../assets/logo.svg';
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
      {isHome && <img src={Logo} alt="Call Of Duty" title="Call Of Duty" />}
    </Button>
  );
};

export default ServerButton;