import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './style';

//Function to create channel list component
const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
          <h4>Canais de texto</h4>
          <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="CoD Zarzone" />
      <ChannelButton channelName="CoD Ghosts" />
      <ChannelButton channelName="The Last Of Us" />
    </Container>
  );
}

export default ChannelList;