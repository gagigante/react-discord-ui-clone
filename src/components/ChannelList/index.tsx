import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="daily" selected />
      <ChannelButton channelName="impedimentos" />
      <ChannelButton channelName="sprint-planning" />
      <ChannelButton channelName="retrospectiva" />
    </Container>
  );
};

export default ChannelList;