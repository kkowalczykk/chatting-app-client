import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
      display: flex;
      
      .own-message{
            flex-direction: row-reverse;
      }

      .admin-message{
            span{
                  display: none;
            }
           
      }
`

const Content = styled.div`
      box-sizing: border-box;
      width: 100%;
      display: flex;
      margin: 20px 30px;
      align-items: center;

      p{
            width: 60%;
            min-height: 50px;
            justify-self: flex-start;
            padding: 5px 20px;
            line-height: 1.5em;
            background: rgba(210, 210, 210,0.5);
            display: flex;
            align-items: center;
            border-radius:  20px 40px 40px 10px;
      }

      p.own-message{
            background: rgba(250, 127, 114,0.5);
            border-radius:  40px 20px 10px 40px;
      }

      p.admin-message{
                  width:100%;
                  color: #919191;
                  font-size:0.8em;
                  background: none;
                  display: flex;
                  justify-content: center;
            }
      span{
            background: none !important;
            color: #919191;
            font-size:0.8em;
            padding: 0 10px;
      }

`

const MessageBox = ({ message, messageUser, user }) => {
      console.log(user, messageUser);
      let isSentByCurrentUser;

      if (user === messageUser) {
            isSentByCurrentUser = true;
      } else isSentByCurrentUser = false;

      return (
            isSentByCurrentUser != false ?
                  <Wrapper>
                        <Content className="own-message">
                              <p className="own-message">{message}</p>
                              <span className="own-message">{messageUser}</span>
                        </Content></Wrapper>
                  :
                  messageUser == 'admin'
                        ? <Wrapper>
                              <Content className="admin-message">
                                    <p className="admin-message">{message}</p>
                                    <span className="admin-message">{messageUser}</span>
                              </Content>
                        </Wrapper>
                        : <Wrapper>
                              <Content>
                                    <p>{message}</p>
                                    <span>{messageUser}</span>
                              </Content>
                        </Wrapper>
      );
}

export default MessageBox;