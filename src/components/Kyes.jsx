import React from "react";
import styled from "styled-components";
import { useGlobalCtx } from "./Context";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (max-width: 800px) {
    gap: 0.1rem;
  }
  flex: 1;
  &.reset span {
    pointer-events: none;
    background-color: gray;
  }
`;
const Key = styled.span`
  display: block;
  background-color: cyan;
  font-size: 1.3rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;

  &.clicked {
    pointer-events: none;
    background-color: gray;
  }
`;
const Item = ({ item }) => {
  const { isClickedHandler } = useGlobalCtx();
  return <Key onClick={(eo) => isClickedHandler(eo, item)}>{item}</Key>;
};
const Kyes = () => {
  const arr = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <Container className="keys">
      {arr.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </Container>
  );
};

export default Kyes;
