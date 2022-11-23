import React from "react";
import styled from "styled-components";
import { useGlobalCtx } from "./components/Context";
import Hangman from "./components/Hangman";
import Kyes from "./components/Kyes";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
    padding: 1rem;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-transform: capitalize;
    span {
      color: red;
    }
  }
`;
const GameContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const GuessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-transform: capitalize;
`;
const Word = styled.h2`
  border-bottom: 1px solid black;
  width: 50px;
  height: 50px;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
    width: 30px;
    height: 30px;
  }
`;
const PopUpContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  cursor: pointer;
`;
const PopUp = ({ title }) => {
  return <h2 onClick={() => window.location.reload(false)}>{title}</h2>;
};
const App = () => {
  const { randomFields, arrEmpty, lost, win } = useGlobalCtx();

  return (
    <>
      <GlobalStyles />

      <Container>
        <Top>
          <h3>hangman game</h3>
          <h3>
            word from : <span>{randomFields}</span>
          </h3>
        </Top>
        <GameContainer>
          <Hangman />
          <Kyes />
        </GameContainer>
        <GuessContainer>
          {arrEmpty.map((item, index) => (
            <Word key={index}>{item}</Word>
          ))}
        </GuessContainer>
        {lost && (
          <PopUpContainer>
            <PopUp title={"You Lost, Click Me to Reset"} />
          </PopUpContainer>
        )}
        {win && (
          <PopUpContainer>
            <PopUp title={"Congrats You Win, Click Me to Reset"} />
          </PopUpContainer>
        )}
      </Container>
    </>
  );
};

export default App;
