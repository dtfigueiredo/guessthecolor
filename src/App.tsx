import './App.css';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import {
  aswersState,
  bgColorState,
  correctScore,
  isAnswerCorret,
  wrongScore,
} from './atoms';

export const App = () => {
  //recoil states
  const [color, setColor] = useRecoilState(bgColorState);
  const [answers, setAnswers] = useRecoilState(aswersState);
  const [isCorrectAnswer, setCorrectAnswer] = useRecoilState(isAnswerCorret);
  const [scoreCounter, setScoreCounter] = useRecoilState(correctScore);
  const [wrongCounter, setWrongCounter] = useRecoilState(wrongScore);

  //generating random color with an onliner
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

  //generating the answers buttons
  const generateColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  //show the result of the guess
  const handleOnClick = (answerColor: string) => {
    if (answerColor === color) {
      generateColor();
      setCorrectAnswer(true);
      setScoreCounter(scoreCounter + 1);
      setTimeout(() => setCorrectAnswer(undefined), 3000);
    } else {
      setCorrectAnswer(false);
      setWrongCounter(wrongCounter + 1);
      setTimeout(() => setCorrectAnswer(undefined), 3000);
    }
  };

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <main className="App">
      <header className="header">
        <h1 className="title">Guess the box color</h1>

        <div className="score-box">
          <h2 className="subtitle">
            Score: <span className="score">{scoreCounter}</span>
          </h2>

          <h2 className="subtitle">
            Wrong trys: <span className="score">{wrongCounter}</span>
          </h2>
        </div>
      </header>

      <section
        className="guess-me"
        style={{ background: `${color}` }}
      ></section>

      <section className="buttons">
        {answers.map((answer) => (
          <button
            className="btn"
            key={answer}
            onClick={() => handleOnClick(answer)}
          >
            {answer}
          </button>
        ))}
      </section>

      {/* feedback answer */}
      {isCorrectAnswer === true && (
        <div className="answer correct">Corret Answer</div>
      )}
      {isCorrectAnswer === false && (
        <div className="answer wrong">Wrong Answer</div>
      )}
    </main>
  );
};
