// libraries
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// icons
import icn_brand from './../assets/textures/brand-icon.png';

const Brand = () => {
  const SBrand = styled(Link)`
    display: flex;
    line-height: 50px;
    text-decoration: none;
    color: white;
  `;

  return (
    <SBrand to='/'>
      <img src={icn_brand} alt="" />
      GG
    </SBrand>

  )
}

export default Brand
