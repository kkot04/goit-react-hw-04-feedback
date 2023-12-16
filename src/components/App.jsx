import {useState} from 'react';

import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const addFeedback = event => {
    if (event.target.name === 'good'){
      setGood(prevState => prevState + 1 )
    } else if (event.target.name === 'neutral'){
      setNeutral (prevState => prevState + 1 )
    } else if (event.target.name === 'bad') {
      setBad (prevState => prevState + 1)
    }
    // event.target.name === 'good'
    //   ? this.setState(prevState => ({ good: prevState.good + 1 }))
    //   : event.target.name === 'neutral'
    //   ? this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
    //   : this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (total > 0 ? (good / total) * 100 : 0).toFixed();
  };

  
    const totalFeedback = countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions
             addFeedback={addFeedback}
            />
          </div>
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positive={countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }

