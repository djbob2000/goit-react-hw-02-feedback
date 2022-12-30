import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;