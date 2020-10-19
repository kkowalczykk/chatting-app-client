import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'querystring';
import io from 'socket.io-client';
import RoomTitle from './RoomTitle';
import RoomData from './RoomData';
import MessageInput from './MessageInput';
import Messages from './Messages';

const Wrapper = styled.div`
      width: 100%;
      height: 100vh;
      display:flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      background: #fa7f72;
`
const Container = styled.div`
      width: 900px;
      height: 600px;
      background: #f1f6f9;
      border: 1px solid #389393;
      display: flex;
      flex-direction: column;

      .row{
            display:flex;
            height: 100%;
            width: 100%;
            .col{
                  height: 100%;
                  flex-grow: 4;
            }
            .active-users{
                  flex-grow: 1;
            }

            .vert{
                  display: flex;
                  flex-direction: column;
            }
      }

`

let socket;

const Chat = ({ location }) => {
      const [name, setName] = useState('');
      const [room, setRoom] = useState('');
      const [message, setMessage] = useState('');
      const [messages, setMessages] = useState([]);
      const [roomData, setRoomData] = useState();

      const endpoint = 'localhost:5000';
      useEffect(() => {
            socket = io(endpoint);
            let params = location.search;
            params = params[0] === '?' ? params.substr(1, params.length) : params;
            const { name, room } = queryString.parse(params);
            setName(name);
            setRoom(room);

            socket.emit('join', { name, room });

            socket.on('message', message => {
                  setMessages(messages => [...messages, message]);
            });


            socket.on('roomData', data => {
                  setRoomData(data);
            })

            return () => {
                  socket.emit('disconnect');

                  socket.off();
            }
      }, [endpoint, location.search])




      const sendMessage = (e) => {
            e.preventDefault();
            if (message) {
                  socket.emit('sendMessage', message, () => setMessage(''));
            }
      }

      return (
            <div>
                  <Wrapper>
                        <Container>
                              <RoomTitle></RoomTitle>
                              <div className="row">
                                    <div className="col active-users">
                                          <RoomData></RoomData>
                                    </div>
                                    <div className="col vert">
                                          <Messages></Messages>
                                          <MessageInput></MessageInput>
                                    </div>
                              </div>
                        </Container>
                  </Wrapper>
                  {/* <input value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                  ></input> */}
            </div>
      );
}

export default Chat;