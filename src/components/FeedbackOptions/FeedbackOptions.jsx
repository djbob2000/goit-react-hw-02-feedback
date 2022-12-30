import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <h2>Please leave feedback</h2>
      {options.map(option => (
        <li key={option} className={css.button__list}>
          <button
            className={css.button__feedback}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
