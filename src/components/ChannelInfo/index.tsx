import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
        <HashtagIcon />

        <Title>clone-chat</Title>

        <Separator />

        <Description>Where clones can chat</Description>
    </ Container>
  );
};

export default ChannelInfo;
