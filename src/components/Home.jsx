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
import icn_sword from './../assets/textures/sword.png';
import icn_target from './../assets/textures/target.png';
import icn_shield from './../assets/textures/shield.png';

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
    margin: auto;
  `;

  const GridItem1 = styled(Grid.Item)`
    color: ${g.BodyFColor};
    h2 {
      position: relative;
      top: 40%;
      transform: translateY(-50%);
      text-align: center;
    }
    img {
      width: 100%;
    }
  `;

  const GridItem2 = styled(Grid.Item)`
    color: ${g.BodyFColor};
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 20px;
    text-align: center;

    img {
      width: 100px;
    }
    h1 {
      padding: 10px;
      font-weight: 400;
    }
  `;
  return (
    <body>
      <div>
        <ImageContainer>
          <HeadlineImage src={img_headline} alt="" />
        </ImageContainer>
        <HeadlineText>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ullam corporis fugiat.
          </h1>
        </HeadlineText>
      </div>

      {/* ======================================== */}

      <GridContainerContainer>
        <GridContainer columns={2} gap={20}>
          <GridItem1>
            <img src={img_pic1} alt="" />
          </GridItem1>
          <GridItem1>
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
          </GridItem1>
          <GridItem1>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui non sapiente distinctio? Est, officia accusamus!
            </h2>
          </GridItem1>
          <GridItem1>
            <img src={img_pic2} alt="" />
          </GridItem1>
        </GridContainer>
      </GridContainerContainer>

      {/* ======================================== */}

      <GridContainerContainer>
        <GridContainer columns={3} gap={20} padding={50}>
          <GridItem2>
            <img src={icn_sword} alt="" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. culpa ex ipsum deserunt tempore dolor illum, alias
          veritatis dolore ea, optio minima perferendis error voluptatum repellat explicabo cupiditate officia
        consequuntur.</h1>
          </GridItem2>
          <GridItem2>
            <img src={icn_target} alt="" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae itaque illum laboriosam ipsam
        architecto!</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi vitae recusandae commodi?</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis?</h1>
          </GridItem2>

          <GridItem2>
            <img src={icn_shield} alt="" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente, nesciunt doloremque in
        voluptate quisquam totam magni, ad dolor, architecto quibusdam cum similique?</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptate?</h1>
          </GridItem2>
        </GridContainer>
      </GridContainerContainer>
    </body>
  )
}

export default Home
