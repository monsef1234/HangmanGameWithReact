import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 50%;
  height: 300px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  &.wrong-1 div:nth-child(1) {
    display: block !important;
  }
  &.wrong-2 div:nth-child(2) {
    display: block !important;
  }
  &.wrong-3 div:nth-child(3) {
    display: block !important;
  }
  &.wrong-4 div:nth-child(4) {
    display: block !important;
  }
  &.wrong-5 div:nth-child(5) {
    display: block !important;
  }
  &.wrong-6 div:nth-child(6) {
    display: block !important;
  }
  &.wrong-7 div:nth-child(7) {
    display: block !important;
  }
  &.wrong-8 div:nth-child(8) {
    display: block !important;
  }
`;
const Line = styled.div`
  position: absolute;
  width: 3rem;
  height: 5px;
  background-color: black;
  bottom: 0;
  left: 5rem;
  display: none;
`;
const Piller = styled.div`
  position: absolute;
  left: 6.5rem;
  width: 5px;
  bottom: 0;
  height: calc(100% - 20px);
  background-color: black;
  display: none;
`;
const _Line = styled.div`
  position: absolute;
  height: 5px;
  width: 5rem;
  top: 3rem;
  left: 6.5rem;
  background-color: black;
  display: none;

  &::before {
    content: "";
    position: absolute;
    height: 3rem;
    width: 5px;
    left: 5rem;
    background-color: black;
  }
`;
const Dashed = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  background-color: transparent;
  border: 5px dashed black;
  border-radius: 50%;
  top: 6rem;
  left: 10rem;
  display: none;
`;
const Head = styled.div`
  position: absolute;
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 5px solid black;
  border-radius: 50%;
  top: 103px;
  left: 168px;
  display: none;
`;
const Shape = styled.div`
  position: absolute;
  top: 9.5rem;
  left: 11.6rem;
  height: 5rem;
  width: 5px;
  display: none;

  background-color: black;
`;
const Hands = styled.div`
  position: absolute;
  width: 3rem;
  height: 5px;
  background-color: black;
  transform: rotate(-25deg);
  top: 11rem;
  left: 11.6rem;
  display: none;

  &::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 5px;
    background-color: black;
    transform: rotate(50deg);
    top: -1rem;
    left: -2.5rem;
  }
`;
const Feet = styled.div`
  position: absolute;
  position: absolute;
  width: 3rem;
  height: 5px;
  background-color: black;
  transform: rotate(30deg);
  top: 15rem;
  display: none;

  left: 11.6rem;
  &::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 5px;
    background-color: black;
    transform: rotate(-60deg);
    top: 1rem;
    left: -2.2rem;
  }
`;
const Hangman = () => {
  return (
    <Container className="hangman">
      <Line></Line>
      <Piller></Piller>
      <_Line></_Line>
      <Dashed></Dashed>
      <Head></Head>
      <Shape></Shape>
      <Hands></Hands>
      <Feet></Feet>
    </Container>
  );
};

export default Hangman;
