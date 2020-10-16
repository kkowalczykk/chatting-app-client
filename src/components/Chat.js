import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'querystring';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
      const [name, setName] = useState('');
      const [room, setRoom] = useState('');
      const [message, setMessage] = useState('');
      const [messages, setMessages] = useState([]);

      const endpoint = 'localhost:5000';
      useEffect(() => {
            socket = io(endpoint);
            let params = location.search;
            params = params[0] === '?' ? params.substr(1, params.length) : params;
            const { name, room } = queryString.parse(params);
            setName(name);
            setRoom(room);

            socket.emit('join', { name, room });



            return () => {
                  socket.emit('disconnect');

                  socket.off();
            }
      }, [endpoint, location.search])

      useEffect(() => {
            socket.on('message', message => {
                  setMessages(messages => [...messages, message]);
            })

      }, [messages]);

      return (
            <div></div>
      );
}

export default Chat;