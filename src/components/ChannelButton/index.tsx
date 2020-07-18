import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './style';

//Interface of props button
export interface Props {
  channelName: string;
  selected?: boolean;
}

//Function to create channel button component
const ChannelButton: React.FC<Props> = ({
  channelName,
  selected,
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;