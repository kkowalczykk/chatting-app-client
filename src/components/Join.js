import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Wrapper = styled.div`
      width: 100%;
      height: 100vh;
      display:flex;
      align-items: center;
      justify-content: center;
      background: #222831;
`
const FormBox = styled.div`
      box-sizing: border-box;
      width: 25%;
      min-width: 320px;
      height: 500px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: #393e46;
`
const Header = styled.h1`
      text-align: center;
      color: #00adb5;

`

const Input = styled.input`
      background: #222831;
      display: block;
      margin: 20px 10px;
      max-width: 100%;
      padding: 8px 16px;
      line-height: 25px;
      font-size: 14px;
      border-radius: 6px;
      -webkit-appearance: none;
      color: white;
      border: 1px solid #00adb5;
      transition: border .3s ease;
      &::placeholder {
            color: white;
      }
      &:focus {
            outline: none;
            border-color: #00adb5;
            box-shadow: 0 0 10px 7px rgba(0, 255, 245, 0.5);
      }
      
`

const Btn = styled.button`
      
      width: 100%;
      margin: 40px 0;
      padding: 10px 10px;
      background: #222831;
      border: 1px solid #00adb5;
      color: #00adb5;
      overflow: hidden;
      position: relative;
      cursor: pointer;
            &::before {
                  position: absolute;
                  content: "";
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                        120deg,
                        transparent,
                        #00fff5,
                        transparent
                  );
                  transform: translateX(-100%);
                  transition: 0.6s;
            }

      &:hover {
      background: transparent;
      box-shadow: 0 0 10px 7px rgba(0, 255, 245, 0.5);

            &::before {
                  transform: translateX(100%);
            }
      }
`

const Join = () => {
      const [name, setName] = useState('');
      const [room, setRoom] = useState('');

      return (
            <Wrapper>
                  <FormBox>
                        <Header>Log in</Header>
                        <Input placeholder='Username' type='text' onChange={(e) => setName(e.target.value)}></Input>
                        <Input placeholder='Room name' type='text' onChange={(e) => setRoom(e.target.value)}></Input>
                        <Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room) ? event.preventDefault() : null} style={{ display: 'block', maxWidth: '100%', padding: '0 10px' }}>
                              <Btn type='submit'>Join Room</Btn>
                        </Link>
                  </FormBox>
            </Wrapper>
      );
}

export default Join;