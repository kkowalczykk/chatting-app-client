import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'querystring';
import io from 'socket.io-client';
import RoomTitle from './RoomTitle';
import RoomData from './RoomData';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { useHistory } from 'react-router';

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
      width: 1100px;
      height: 700px;
      max-height: 700px;
      background: #f1f6f9;
      border: 1px solid #389393;
      display: flex;
      flex-direction: column;

      .row{
            display:flex;
            height: 670px;
            max-height: 100%;
            width: 100%;
            box-sizing: border-box;
            .col{
                  height: 100%;
                  max-height: 100%;
                 width: 75%;
            }
            .active-users{
                  width: 25%;
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
      const [roomData, setRoomData] = useState(null);
      const endpoint = 'https://chatting-app-back.herokuapp.com';
      let history = useHistory();
      useEffect(() => {
            socket = io(endpoint);
            let params = location.search;
            params = params[0] === '?' ? params.substr(1, params.length) : params;
            const { name, room } = queryString.parse(params.toLowerCase());
            setName(name);
            setRoom(room);
            socket.emit('join', { name, room });
            socket.on('userExists', () => {
                  history.push('/');
                  alert('User with this nickname is already in this room');
            })
            socket.on('message', message => {
                  setMessages(messages => [...messages, message]);
            });


            socket.on('roomData', data => {
                  setRoomData(data);
            })

            return () => {
                  socket.disconnect();
                  socket.off();
            }
      }, [endpoint, location])




      const sendMessage = (e) => {
            e.preventDefault();
            if (message) {
                  socket.emit('sendMessage', message, () => setMessage(''));
                  setMessage('');
            }
      }

      return (
            <div>
                  <Wrapper>
                        <Container>
                              <RoomTitle room={room}></RoomTitle>
                              <div className="row">
                                    <div className="col active-users">
                                          <RoomData roomData={roomData}></RoomData>
                                    </div>
                                    <div className="col vert">
                                          <Messages messages={messages} user={name}></Messages>
                                          <MessageInput sendMessage={sendMessage} message={message} setMessage={setMessage}></MessageInput>
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