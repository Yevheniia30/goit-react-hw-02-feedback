import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedBack = e => {
    // console.log('this', this, 'event target', e.target.dataset.feedback);
    const feedback = e.target.dataset.feedback;
    this.setState(prevState => {
      // console.log('prevstate', prevState);
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = values => {
    return values.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const values = Object.values(this.state);
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback(values);
    const positiveValue = this.countPositiveFeedbackPercentage(good, total);

    console.log('state', this.state);
    console.log('values', values);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleLeaveFeedBack}
            />
          </Section>

          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                total={total}
                positiveValue={positiveValue}
              />
            ) : (
              <Notification message="There is no feedback yet. You can leave the first one ;)" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
