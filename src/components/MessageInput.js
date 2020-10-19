import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
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
`

const MessageInput = () => {
      return (
            <Wrapper>
                  <Input></Input>
                  <SendBtn></SendBtn>
            </Wrapper>
      );
}

export default MessageInput;