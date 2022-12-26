import React, { useState } from 'react';
import questions from './qnSet';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import Questions from './Questions';
import ActiveQuestion from './ActiveQuestion';

// Exam instruction
const HeaderEnd = styled.div`
  margin-left: 40%;
`;

const Item = styled.div`
  width: 50%;
  margin-left: 10px;
`;
const HeadItem1 = styled.h5`
  color: red;
`;
const HeadItem2 = styled.h6`
  color: blue;
  margin-left: 30px;
`;

const Inst = styled.div`
  color: brown;
  font-size: 40px;
`;
const Timer = styled.span`
  color: red;
  font-size: 45px;
`;

const Instruction = () => {
  const [currentQnIndex, setCurrentQnIndex] = useState(1);
  const [examOver, setExamOver] = useState(false);
  const [examFinishTime, setExamFinishTime] = useState(null);
  const [data, setData] = useState([]);

  useState(() => {
    setData(
      questions.map((q) => ({
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
      <div>
        <div className="bg-dark text-white">
          <h3>NEW YORK REGENTS SCHOOL</h3>
        </div>
        <div className="instructionPage ms-5">
          <div className="header d-flex">
            <Item>
              <HeadItem1>Please read the instructions carefully</HeadItem1>
            </Item>
            <HeaderEnd className="header-end justify-content-end d-flex">
              <div>View in:</div>
              <select
                className="form-select form-select-sm size-10"
                aria-label=".form-select-sm example"
              >
                <option value="1">English</option>
                <option value="2">Hindi</option>
              </select>
            </HeaderEnd>
          </div>
          <div className="body">
            <HeadItem2>General instructions</HeadItem2>
            <p>1.Total duration of examination is 60 mins</p>
            <p>2.Exam consist of multiple choice qestions</p>
            <p>3.The exam has 10 questions</p>
            <p>4.No negative marks</p>
            <p>5.All questions are mandatory</p>
            <Inst>BEST OF LUCK !!!</Inst>
          </div>

          <button
            type="button"
            className="btn btn-success align-items-center justify-content-center "
            onClick={startExam}
          >
            Start Exam
          </button>
        </div>
      </div>
    );
  }
  if (!examFinishTime && examOver) {
    return (
      <Questions
        data={data}
        selectQn={(index) => setCurrentQnIndex(index + 1)}
        examOver={examOver}
      />
    );
  }

  // take each qn from qnset
  const selectedQuestion = data.find(
    (d, index) => index === currentQnIndex - 1
  );

  const checkAnswer = (answerIndex) => {
    setData(
      data.map((d, qnIndex) => {
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
        <Timer>
          {hours}:{minutes}:{seconds}
        </Timer>
      );
    }
  };

  const vistedQn = () => {
    setData(
      data.map((d, qnIndex) => {
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
          <h2>
            Question {currentQnIndex} of {data.length}:
          </h2>
          <p>{selectedQuestion.question}</p>
          <h5>Select any one of given answer:</h5>
          <div>
            <ActiveQuestion
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
        <Questions
          data={data}
          selectQn={(index) => setCurrentQnIndex(index + 1)}
        />
      </div>
    </div>
  );
};

export default Instruction;
