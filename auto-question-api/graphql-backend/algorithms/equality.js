// algorithms/equality.js

// Utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates of function pairs (f, g) along with an “areEqual” flag
  const templates = [
    {
      f: 'x^2 - 4',
      g: '(x - 2)(x + 2)',
      areEqual: true,
      explanation: 'Expand (x–2)(x+2) ⇒ x^2 – 4, so f(x)=g(x) on ℝ.'
    },
    {
      f: 'x/(x)',
      g: '1',
      areEqual: false,
      explanation: 'f is undefined at x=0, whereas g(x)=1 everywhere.'
    },
    {
      f: 'sin^2(x) + cos^2(x)',
      g: '1',
      areEqual: true,
      explanation: 'By the Pythagorean identity, sin^2+cos^2=1 for all x.'
    },
    {
      f: '|x|/x',
      g: 'x/|x|',
      areEqual: true,
      explanation: 'Both equal 1 for x>0 and –1 for x<0 (undefined at 0).'
    },
    {
      f: 'e^{ln(x)}',
      g: 'x',
      areEqual: false,
      explanation: 'e^{ln(x)} = x only for x>0; domain differs.'
    }
  ];
  
  export function generateEqualityQuestion(difficulty) {
    const tpl = pick(templates);
    const { f, g, areEqual, explanation } = tpl;
  
    // Choose a style
    const style = pick(['tf', 'mcq', 'proof']);
  
    let question, options, answer;
    if (style === 'tf') {
      question = `True or False: f(x) = ${f} and g(x) = ${g} are equal functions.`;
      options  = ['True','False'];
      answer   = areEqual ? 'True' : 'False';
    } else if (style === 'mcq') {
      question = `Are the functions f(x) = ${f} and g(x) = ${g} equal?`;
      options  = ['Yes','No'];
      answer   = areEqual ? 'Yes' : 'No';
    } else { // proof
      question = `Prove or disprove that f(x) = ${f} and g(x) = ${g} are equal functions.`;
      options  = [];
      answer   = explanation;
    }
  
    return { question, options, answer };
  }
  