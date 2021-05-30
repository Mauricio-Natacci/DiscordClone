import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref ={messagesRef} >
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
          
            author="Mauricio Natacci"
            date="30/05/2021"
            content="Anything is possible if you want it enough"

          />
        ))}

        <ChannelMessage
          author="Nathan"
          date="30/05/2021"
          content={
            <>
              <Mention>@Mauricio Natacci</Mention> Tudo é aprendível!
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder= "Digite sua mensagem aqui"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;