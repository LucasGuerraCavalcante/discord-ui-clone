import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channels</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="free-chat" />
      <ChannelButton channelName="work-chat" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="minecraft" />
      <ChannelButton channelName="movies" />
    </ Container>
  );
};

export default ChannelList;
