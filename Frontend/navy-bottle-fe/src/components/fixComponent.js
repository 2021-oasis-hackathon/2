import styled from 'styled-components';

export const FixWrapper =  styled.div`
  position: absolute;
  width: 100%;

  ::before{
    content: "";
    display: flex;
    padding-top: 56.25%;
  }
`


export const FixMapIMGWrapper =  styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
`