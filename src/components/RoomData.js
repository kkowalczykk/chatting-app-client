import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      min-width: 100%;
      height: 100%;
      background: #f0f3f5;
      color: #919191; 
      display: flex;
      flex-direction: column;
`
const User = styled.p`
      
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5px 15px;
      padding-left: 30px;
      font-size: 1.3em;
      position: relative;
      span::after{
            content: '';
            width: 10px;
            height: 10px;
            background: #52fc23;
            border-radius: 50%;
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translate(0, -5px);
      }
`

const RoomData = (props) => {
      const { roomData } = props;
      return (
            <Wrapper>
                  <h3 style={{ alignSelf: 'center', margin: '10px 0' }}>Active users</h3>
                  {roomData ? roomData.users.map((user, id) => (
                        <User key={id}><span>{user.name}</span></User>
                  )) : null}
            </Wrapper>
      );
}

export default RoomData;  