import './App.css';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { aswersState, bgColorState, isAnswerCorret } from './atoms';

export const App = () => {
  //recoil states
  const [color, setColor] = useRecoilState(bgColorState);
  const [answers, setAnswers] = useRecoilState(aswersState);
  const [isCorrectAnswer, setCorrectAnswer] = useRecoilState(isAnswerCorret);

  //generating random color
  const getRandomColor = () => {
    const digits = '0123456789ABCDEF'.split('');

    const color = new Array(6)
      .fill('')
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join('');

    return `#${color}`;
  };

  //generating the answer buttons
  const generateColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  const handleOnClick = (answerColor: string) => {
    if (answerColor === color) {
      generateColor();
      setCorrectAnswer(true);
      setTimeout(() => {
        setCorrectAnswer(undefined);
      }, 3000);
    } else {
      setCorrectAnswer(false);
      setTimeout(() => {
        setCorrectAnswer(undefined);
      }, 3000);
    }
  };

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <main className="App">
      <h1 className="title">Guess the box color</h1>

      <div
        className="guess-me"
        style={{ background: `${color}` }}
      ></div>

      <div className="buttons">
        {answers.map((answer) => (
          <button
            className="btn"
            key={answer}
            onClick={() => handleOnClick(answer)}
          >
            {answer}
          </button>
        ))}
      </div>

      {isCorrectAnswer === true && <div className="correct">Corret Answer</div>}
      {isCorrectAnswer === false && <div className="wrong">Wrong Answer</div>}
    </main>
  );
};
