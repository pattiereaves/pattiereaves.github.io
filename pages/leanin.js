import * as React from 'react';

const LeanIn = () => {
  const [question, setQuestion] = React.useState('');
  const questions = [
    'What are you most proud of?',
    'What do you most regret?',
    'Tell us about a time when you overcame diversity?',
    'When have you felt most powerful?',
    'When have you felt least powerful?',
    'What brings out the best in you?',
    'What is one thing about yourself that you wish you could change?',
    'What is one thing in your life that you wish you could change?',
    'Who do you admire most and why?',
    'Who do you most envy and why?',
    'A year from now, what will you wish you had done today?',
    'If you could give one piece of advice to your younger self, what would it be?',
    'If there was one more hour in the day, what would you spend it on?',
    'If you had to describe your life in three sentences, what would you say?',
    'IF you could ask for anything, what would you ask for and from whom?',
    'How would your closest friend describe you?',
    'What are three things you most value? How does your daily routine align with these values?',
    'Who has had an impact on your life that you haven\'t thanked? Why?',
    'What makes you happy?'
  ]
  const getQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  }

  return (
    <>
    <button onClick={getQuestion}>Get a question</button>
    {question && (
    <div>
      {question}
    </div>
    )}
    </>
  );
}

export default LeanIn;
