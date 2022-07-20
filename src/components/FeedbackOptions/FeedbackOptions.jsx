import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log('options', options);

  return (
    <>
      {options.map(item => (
        <button
          key={item}
          type="button"
          name={item}
          className={[s['btn'], s[`${item}`]].join(' ')}
          onClick={onLeaveFeedback}
          // data-feedback={item}
        >
          {item}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
