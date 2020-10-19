import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
      min-width: 100%;
      height: 30px;
      background: #389393;
      color: white; 
      display: flex;
      justify-content: center;
      align-items: center;
`

const RoomTitle = (props) => {
      return (
            <Wrapper>
                  <h3>test</h3>
            </Wrapper>
      );
}

export default RoomTitle;