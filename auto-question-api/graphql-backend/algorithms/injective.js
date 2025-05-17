// algorithms/injective.js
import random from 'random';

const injectiveTemplates = [
  {
    func: 'f(x) = 2x + 3',
    isInjective: true,
    explanation: 'Linear functions of the form f(x) = ax + b are injective when a ≠ 0.'
  },
  {
    func: 'f(x) = x^2',
    isInjective: false,
    explanation: 'f(2) = f(-2) = 4, so two different inputs have the same output.'
  },
  {
    func: 'f(x) = e^x',
    isInjective: true,
    explanation: 'Exponential functions like e^x are strictly increasing and hence injective.'
  },
  {
    func: 'f(x) = sin(x)',
    isInjective: false,
    explanation: 'sin(0) = sin(π), so it is not injective over all real numbers.'
  },
  {
    func: 'f(x) = x^3 - x',
    isInjective: false,
    explanation: 'f(1) = f(-1) = 0, so it is not injective.'
  },
  {
    func: 'f(x) = ln(x)',
    isInjective: true,
    explanation: 'Natural log function is strictly increasing and injective for x > 0.'
  },
];

export function generateInjectiveQuestion(difficulty) {
  const qTemplate = injectiveTemplates[Math.floor(Math.random() * injectiveTemplates.length)];

  const choices = ['tf', 'proof', 'mcq'];
const questionType = choices[Math.floor(Math.random() * choices.length)];

  let question, options, answer;

  if (questionType === 'tf') {
    question = `True or False: The function ${qTemplate.func} is injective.`;
    options = ['True', 'False'];
    answer = qTemplate.isInjective ? 'True' : 'False';
  } else if (questionType === 'proof') {
    question = `Prove or disprove: The function ${qTemplate.func} is injective.`;
    options = [];
    answer = qTemplate.explanation;
  } else {
    question = `Is the function ${qTemplate.func} injective?`;
    options = ['Yes', 'No'];
    answer = qTemplate.isInjective ? 'Yes' : 'No';
  }

  return {
    question,
    options,
    answer,
  };
}
