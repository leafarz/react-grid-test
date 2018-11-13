// libraries
import React from 'react';
import styled from 'styled-components';

// styled elements
import Grid from './../elements/Grid';
import g from './../js/global';

// textures
import img_headline from './../assets/textures/games01.jpg';
import img_pic1 from './../assets/textures/games02.jpg';
import img_pic2 from './../assets/textures/games03.jpg';

const Home = () => {
  const ImageContainer = styled.div`
    overflow:hidden;
  `;
  const HeadlineImage = styled.img`
    width: 100%;
    margin:-20% 0;
    filter: grayscale(50%);
  `;
  const HeadlineText = styled.div`
    height: 200px;
    width: 100%;
    background-image: linear-gradient(rgb(30, 30, 30), rgb(25, 25, 25), rgb(10, 10, 10));
    text-align: center;
    color: white;
    h1 {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  `;
  const GridContainerContainer = styled.div`
    background-color: ${g.BGColor2};
  `;
  const GridContainer = styled(Grid.Container)`
    width: 80%;
    margin: 0 auto;
  `;
  const GridImg = styled.img`
    width: 100%;
  `;
  const GridItem = styled(Grid.Item)`
    color: ${g.BodyFColor};
  `;
  return (
    <body>
      <div>
        <ImageContainer>
          <HeadlineImage src={img_headline} alt="" />
        </ImageContainer>
        <HeadlineText>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ullam corporis fugiat.</h1>
        </HeadlineText>
      </div>

      <GridContainerContainer>
        <GridContainer columns={2} gap={20}>
          <GridItem>
            <GridImg src={img_pic1} alt="" />
          </GridItem>
          <GridItem>asdf</GridItem>
          <GridItem>asdf</GridItem>
          <GridItem>
            <GridImg src={img_pic2} alt="" />
          </GridItem>
        </GridContainer>
      </GridContainerContainer>
    </body>
  )
}

export default Home
