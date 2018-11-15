import React from 'react';

import styled from 'styled-components';

import g from './../js/global';

const Games = () => {
  const Body = styled.body`
    height: 75vh;
    background-color: ${g.BGColor2};
    color: white;
  `;
  return (
    <Body>
      Games
    </Body>
  )
}

export default Games;
