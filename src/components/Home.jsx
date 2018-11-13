// libraries
import React from 'react';
import styled from 'styled-components';

// textures
import img_headline from './../assets/textures/games01.jpg';

const Home = () => {
  const ImageContainer = styled.div`
    overflow:hidden;
  `;
  const HeadlineImage = styled.img`
    width: 100%;
    margin:-20% 0;
  `;
  return (
    <body>
      <ImageContainer>
        <HeadlineImage src={img_headline} alt=""/>
      </ImageContainer>
    </body>
  )
}

export default Home
