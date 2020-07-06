import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages >
        {
          Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage 
              key={n}
              author="Lucas Guerra"
              date="04/07/2020"
              content="Hey, I need to talk to you"
            />
          ))
        }
        <ChannelMessage 
          author="Clone 1"
          date="04/07/2020"
          content={
            <>
              <Mention>@Lucas Guerra</Mention> OK, how can I serve you?
            </>
          }
          hasMention
          isBot
        /> 
      </ Messages>
      <InputWrapper>
        <Input type="text" placeholder="Chat in #clone-chat" />
        <InputIcon />
      </ InputWrapper>
    </Container>
  );
};

export default ChannelData;