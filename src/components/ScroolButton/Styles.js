import styled from "styled-components";

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  right: 0.5%;
  bottom: 20px;
  height: 3rem;
  font-size: 2.5rem;
  z-index: 1;
  cursor: pointer;
  color: rgb(245, 245, 245, 0.6);

  @media (max-width: 576px) {
    font-size: 2rem;
    margin-right: 5px;
  } ;
`;
