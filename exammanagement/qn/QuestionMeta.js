import React from 'react';
import _ from 'lodash';
const QuestionMeta = ({ data, selectQn, examOver }) => {
  const reviewOptions = [
    {
      name: 'Not Visited',
      color: 'danger',
      count: _.filter(data, (d) => !d.visited).length,
    },
    {
      name: 'Not Answered',
      color: 'warning',
      count: _.filter(data, (d) => !d.selectedAnswer).length,
    },
    {
      name: 'Answered',
      color: 'success',
      count: _.filter(data, (d) => d.selectedAnswer).length,
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-between align-item-center flex-wrap ">
        {!examOver
          ? _.map(data, (d, index) => {
              let buttonClassName = 'danger';
              if (d.selectedAnswer !== null) {
                buttonClassName = 'success';
              } else if (!d.visited) {
                buttonClassName = 'info';
              }
              return (
                <button
                  type="button"
                  className={`btn btn-${buttonClassName}`}
                  onClick={() => selectQn(index)}
                >
                  {index + 1}
                </button>
              );
            })
          : null}
      </div>
      <h3>Mark for review</h3>
      {
        <div className="d-flex justify-content-between align-item-center flex-wrap ">
          {_.map(reviewOptions, (option, index) => {
            return (
              <div
                className="d-flex justify-content-between align-item-center"
                key={index}
              >
                {option.name}
                <button type="button" className={`btn btn-${option.color}`}>
                  {option.count}
                </button>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default QuestionMeta;
