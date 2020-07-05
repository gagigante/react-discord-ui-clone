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

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="geral" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="falar mal da MIBR" />
      <ChannelButton channelName="live da conversinha" />
    </Container>
  );
};

export default ChannelList;