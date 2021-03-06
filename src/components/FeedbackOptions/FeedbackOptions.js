import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onAddfeedback }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button
          className={s.button}
          type="button"
          name={option}
          onClick={onAddfeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
