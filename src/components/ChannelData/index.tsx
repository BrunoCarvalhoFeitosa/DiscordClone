import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './style';

//Function to create channel data component
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  //Hook to redirect user to final user messages
  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
        <Messages ref={messagesRef}>
          {Array.from(Array(5).keys()).map((n) => (
            <ChannelMessage
              key={n}
              author="Bruno Carvalho"
              date="18/07/2020"
              content="Uma nova mensagem acaba de chegar"
            />
          ))}
          
          <ChannelMessage
            author="Funky Black Cat"
            date="17/07/2020"
            content={
              <>
                <Mention>@Bruno Carvalho </Mention>, vamos formar um squad no Warzone?
              </>
            }
            hasMention
            isBot
          />
        </Messages>
        <InputWrapper>
            <Input type="text" placeholder="Conversar em #Chat-livre" />
            <InputIcon />
        </InputWrapper>
    </Container>
  );
}

export default ChannelData;