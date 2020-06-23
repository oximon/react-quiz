import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}. </strong>
        {props.question}
      </span>

      <small>
        {props.answerNumber} из {props.quizLength}
      </small>
    </p>

    <AnswersList
      onAnswerClick={props.onAnswerClick}
      answers={props.answers}
      state={props.state}
    />
  </div>
);

export default ActiveQuiz;
