import React from 'react';
import styled from 'styled-components';
import close from '../media/close.png'
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
      min-width: 100%;
      height: 30px;
      letter-spacing: 4px;
      font-size: 1.2em;
      background: #389393;
      color: white; 
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
`

const CloseImg = styled(Link)`
      position: absolute;
      right: 5px;
      width: 30px;
      height: 30px;

      img{
            width: 100%;
      }
`

const RoomTitle = ({ room }) => {
      return (
            <Wrapper>
                  <h4>{room}</h4>
                  <CloseImg to='/'><img src={close} alt="close" /></CloseImg>
            </Wrapper>
      );
}

export default RoomTitle;