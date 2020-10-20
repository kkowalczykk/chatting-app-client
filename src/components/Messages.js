import React from 'react';
import styled from 'styled-components';
import MessageBox from './MessageBox';
import ScrollToBottom from 'react-scroll-to-bottom';

const Wrapper = styled.div`
      flex-grow: 1;
      background: #f1f6f9;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
`

const Messages = ({ messages, user }) => {
      return (

            <ScrollToBottom className='scrolled-wrapper'>
                  {messages !== undefined ?

                        messages.map((message, id) => (
                              message.user === user
                                    ? <MessageBox key={id} className='own-message' message={message.text} messageUser={message.user} user={user}></MessageBox>
                                    : <MessageBox key={id} className='someone-message' message={message.text} messageUser={message.user} user={user}></MessageBox>
                        ))

                        : null}
            </ScrollToBottom>

      );
}

export default Messages;