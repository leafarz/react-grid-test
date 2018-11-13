import React from 'react';
import styled from 'styled-components';

import Grid from './../elements/Grid';
import g from './../js/global';

const Footer = () => {
  const SFooter = styled.footer`
    background-color: ${g.BGColor2};
    color: white;
    text-align: center;
  `;

  const UL = styled.ul`
    list-style-type: none;
    text-decoration: none;
  `;
  const LI = styled.li`
    a {
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  `;
  const GridItem = styled(Grid.Item)`
    h1 {
      padding: 20px;
    }
  `;

  return (
    <SFooter>
      <Grid.Container columns={3} padding={20} gap={20}>
        <GridItem centered>
          <h1>Navigation</h1>
          <UL>
            <LI><a href='/'>Home</a></LI>
            <LI><a href='/games'>Games</a></LI>
            <LI><a href='/news'>News</a></LI>
          </UL>
        </GridItem>

        <GridItem centered>
          <UL>
            <h1>Social</h1>
            <LI><a href='#facebook'>Facebook</a></LI>
            <LI><a href='#twitter'>Twitter</a></LI>
            <LI><a href='#instagram'>Instagram</a></LI>
          </UL>
        </GridItem>
        <GridItem centered>
          <UL>
            <h1>Information</h1>
            <LI><a href='#terms-conditions'>Terms & Conditions</a></LI>
            <LI><a href='#private-policy'>Private Policy</a></LI>
            <LI><a href='#careers'>Careers</a></LI>
            <LI><a href='#contact-us'>Contact Us</a></LI>
            <LI><a href='#about'>About</a></LI>
          </UL>
        </GridItem>
      </Grid.Container>
    </SFooter>
  )
}

export default Footer
