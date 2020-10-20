import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Wrapper = styled.div`
      width: 100%;
      height: 100vh;
      display:flex;
      align-items: center;
      justify-content: center;
      background: #fa7f72;
`
const FormBox = styled.form`
      box-sizing: border-box;
      width: 25%;
      min-width: 320px;
      height: 500px;
      max-width: 500px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: #f1f6f9;
      border: 1px solid #389393;
`
const Header = styled.h1`
      text-align: center;
      color: #fa7f72;

`

const Input = styled.input`
      background: #f1f6f9;
      display: block;
      margin: 20px 10px;
      max-width: 100%;
      padding: 8px 16px;
      line-height: 25px;
      font-size: 14px;
      border-radius: 6px;
      -webkit-appearance: none;
      color: black;
      border: 1px solid #389393;
      transition: border .3s ease;
      &::placeholder {
            color: #fa7f72;
      }
      &:focus {
            outline: none !important;
            border-color: #389393;
            box-shadow: 0 0 10px 7px rgba(56, 147, 147, 0.5);
      }
      
`

const Btn = styled.button`
      
      width: 100%;
      margin: 40px 0;
      padding: 10px 10px;
      background: #f1f6f9;
      border: 1px solid #00adb5;
      color: #fa7f72;
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
                        #fab2aa,
                        transparent
                  );
                  transform: translateX(-100%);
                  transition: 0.6s;
            }
      &:focus {
            outline: none !important;
      }
      &:hover {
      background: transparent;
      box-shadow: 0 0 10px 7px rgba(250, 127, 114, 0.5);

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