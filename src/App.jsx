import { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  
  const addFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
   return Math.round((good / countTotalFeedback()) * 100);
  }
  
  return (
      <>
        <Section title="Gib ihm, Bratan, gib ihm">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onAddfeedback={addFeedback}
          />
        </Section>
        <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    ); 
 }
