import React from 'react';

const Questions = ({ data, selectQn, examOver }) => {
  const reviewOptions = [
    {
      name: 'Not Visited',
      color: 'danger',
      count: data.filter((d) => !d.visited).length,
    },
    {
      name: 'Not Answered',
      color: 'warning',
      count: data.filter((d) => !d.selectedAnswer).length,
    },
    {
      name: 'Answered',
      color: 'success',
      count: data.filter((d) => d.selectedAnswer).length,
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-between align-item-center flex-wrap ">
        {!examOver
          ? data.map((d, index) => {
              let buttonClassName = 'danger';
              if (d.selectedAnswer !== null) {
                buttonClassName = 'success';
              } else if (!d.visited) {
                buttonClassName = 'warning';
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
      <div>
        <h3>Mark for Review</h3>
      </div>
      {
        <div className="d-flex flex-column justify-content-between align-item-center flex-wrap ">
          {reviewOptions.map((option, index) => {
            return (
              <div
                className="d-flex justify-content-between align-item-center"
                key={index}
              >
                <button type="button" className={`btn btn-${option.color}`}>
                  {option.count}
                </button>
                {option.name}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Questions;
