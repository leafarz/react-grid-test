import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat( ${prop => prop.columns ? prop.columns : 2}, 1fr);
  padding: ${prop => prop.padding ? prop.padding : 0}px;
  grid-gap: ${prop => prop.gap ? prop.gap : 0}px;
`;

const Item = styled.div`
  padding: 20px;
  text-align: ${prop => prop.centered ? 'center' : 'unset'};
`;

export default {
  Container,
  Item
};
