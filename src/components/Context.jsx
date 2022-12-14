import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import failed from "../assets/audios/failure-drum-sound-effect-1-46093.mp3";
import success from "../assets/audios/short-success-sound-glockenspiel-treasure-video-game-6346.mp3";
export const AppCtx = createContext();
import { words } from "../data";
const AppProvider = ({ children }) => {
  const [list] = useState(words);
  const [randomFields, setFields] = useState("");
  const [randomWord, setWord] = useState("");
  const [arrEmpty, setArrEmpty] = useState([]);
  const [wrong, setWrong] = useState(1);
  const [lost, setLost] = useState(false);
  const [win, setWin] = useState(false);
  const randomFieldsHandler = () => {
    return Object.keys(list)[
      Math.floor(Math.random() * Object.keys(list).length)
    ];
  };

  const arrWord = randomWord.split(" ").join("").split("");
  const check = (current) => current !== "";
  const isClickedHandler = (eo, word) => {
    let arr = [...arrEmpty];
    eo.target.className += " clicked";
    if (arrWord.includes(word)) {
      for (let i = 0; i < arrWord.length; i++) {
        if (arrWord[i] === word) {
          arr[i] = word;
        }
      }
      setArrEmpty(arr);
      new Audio(success).play();
    } else {
      const hangmanContainer = document.querySelector(".hangman");
      const keysContainer = document.querySelector(".keys");
      hangmanContainer.className += ` wrong-${wrong}`;
      if (wrong === 8) {
        keysContainer.className += " reset";
        setLost(true);
      }
      setWrong((e) => {
        if (e < 8) {
          return e + 1;
        } else {
          return e;
        }
      });
      new Audio(failed).play();
    }
    if (arr.every(check)) {
      const keysContainer = document.querySelector(".keys");
      keysContainer.className += " reset";
      setWin(true);
    }
  };
  useEffect(() => {
    setFields(randomFieldsHandler());
  }, []);
  useEffect(() => {
    if (randomFields) {
      let wordArr = list[randomFields];
      let randomNum = Math.floor(Math.random() * wordArr.length);
      setWord(wordArr[randomNum].toLowerCase());
      let wordNoSpace = wordArr[randomNum].split(" ").join("");
      setArrEmpty(Array(wordNoSpace.length).fill(""));
    }
    return;
  }, [randomFields]);

  return (
    <AppCtx.Provider
      value={{
        list,
        randomFields,
        arrEmpty,
        isClickedHandler,
        lost,
        win,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
export const useGlobalCtx = () => {
  return useContext(AppCtx);
};
export { AppProvider };
