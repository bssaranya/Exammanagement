import React, { useState } from 'react';
import _ from 'lodash';
import CurrentQuestion from './CurrentQuestion';
import QuestionMeta from './QuestionMeta';

import questions from '../src/components/exam/qnSet';
import Countdown from 'react-countdown';

const Exam = () => {
  const [currentQnIndex, setCurrentQnIndex] = useState(1);
  const [examOver, setExamOver] = useState(false);
  const [examFinishTime, setExamFinishTime] = useState(null);
  const [data, setData] = useState([]);
  useState(() => {
    setData(
      _.map(questions, (q) => ({
        ...q,
        visited: false,
        selectedAnswer: null,
      }))
    );
  }, []);

  const startExam = () => {
    const endTime = new Date();
    // Add five days to current date
    endTime.setMinutes(endTime.getMinutes() + 60);
    // endTime.setSeconds(endTime.getSeconds() + 20);

    setExamFinishTime(endTime);
  };
  console.log({ currentQnIndex, data });

  if (!examFinishTime && !examOver) {
    return (
      <div className="exam-wrapper">
        <div className="start-exam-button-wrapper">
          <button type="button" className="btn btn-primary" onClick={startExam}>
            Start Exam
          </button>
        </div>
      </div>
    );
  }
  if (!examFinishTime && examOver) {
    return (
      <QuestionMeta
        data={data}
        selectQn={(index) => setCurrentQnIndex(index + 1)}
        examOver={examOver}
      />
    );
  }

  // take each qn from qnset
  const selectedQuestion = _.find(
    data,
    (d, index) => index === currentQnIndex - 1
  );

  const checkAnswer = (answerIndex) => {
    setData(
      _.map(data, (d, qnIndex) => {
        if (currentQnIndex - 1 !== qnIndex) {
          return d;
        }
        return {
          ...d,
          selectedAnswer: answerIndex,
        };
      })
    );
  };

  //timer widget
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are completed the exam!</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const vistedQn = () => {
    setData(
      _.map(data, (d, qnIndex) => {
        if (currentQnIndex - 1 !== qnIndex) {
          return d;
        }
        return {
          ...d,
          visited: true,
        };
      })
    );
  };
  console.log('examFinishTime', examFinishTime);
  return (
    <div className="exam-wrapper">
      <Countdown
        date={examFinishTime}
        renderer={renderer}
        onComplete={() => {
          setExamFinishTime(null);
          setExamOver(true);
        }}
      />
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1>
            Question {currentQnIndex} of {data.length}:
          </h1>
          <p>{selectedQuestion.question}</p>
          <h3>Select any one of given answer:</h3>
          <div>
            <CurrentQuestion
              selectedQuestion={selectedQuestion}
              checkAnswer={checkAnswer}
              vistedQn={vistedQn}
            />
            <div className="d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                disabled={currentQnIndex === 1 ? true : false}
                onClick={() => setCurrentQnIndex(currentQnIndex - 1)}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                disabled={currentQnIndex === data.length ? true : false}
                onClick={() => setCurrentQnIndex(currentQnIndex + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <QuestionMeta
          data={data}
          selectQn={(index) => setCurrentQnIndex(index + 1)}
        />
      </div>
    </div>
  );
};

export default Exam;
