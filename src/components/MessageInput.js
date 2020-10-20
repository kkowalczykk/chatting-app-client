import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      max-width: 100%;
      height: 60px;
      display:flex;
`

const Input = styled.input`
      flex-grow:1;
      outline: none;
      border: none;
`
const SendBtn = styled.button`
      width: 80px;
      height: 100%;
      background: #389393;
      outline: none;
      border: none;
      color: white;
      font-size: 1.1em;
`

const MessageInput = (props) => {
      const { message, setMessage, sendMessage } = props;
      return (
            <Wrapper>
                  <Input value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}></Input>
                  <SendBtn onClick={(e) => sendMessage(e)}>Send</SendBtn>
            </Wrapper>
      );
}

export default MessageInput;