import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const CurrentQuestion = ({ selectedQuestion, checkAnswer, vistedQn }) => {
  const [myQuestion, setMyQuestion] = useState(null);
  useEffect(() => {
    setMyQuestion(selectedQuestion);
    if (!selectedQuestion.visited) vistedQn();
  }, [selectedQuestion]);

  console.log('myQuestion', myQuestion);

  if (!myQuestion) {
    return null;
  }
  const answers = _.map(myQuestion.answers, (answer, index) => {
    return (
      <div className="form-check" key={index}>
        <input
          className="form-check-input"
          type="radio"
          name="answer"
          onChange={() => checkAnswer(index)}
          checked={
            myQuestion.selectedAnswer === null
              ? false
              : myQuestion.selectedAnswer === index
              ? true
              : false
          }
        />
        <label className="form-check-label">{answer}</label>
      </div>
    );
  });

  return <div>{answers}</div>;
};

export default CurrentQuestion;
