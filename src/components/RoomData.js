import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      width: 100%;
      height: 100%;
      background: #20a8a8;
      color: white; 
      display: flex;
      flex-direction: column;
`
const User = styled.p`
      
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5px 10px;
      font-size: 1.3em;

`

const RoomData = (props) => {
      const { roomData } = props;
      return (
            <Wrapper>
                  {roomData ? roomData.users.map((user, id) => (
                        <User key={id}>{user.name}</User>
                  )) : null}
            </Wrapper>
      );
}

export default RoomData;  