// algorithms/even.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates of functions guaranteed to be even
  const templates = [
    { expr: 'x^2',               explanation: 'x^2 yields same value for x and -x.' },
    { expr: 'x^4 - 3x^2 + 2',     explanation: 'All powers are even: 4 and 2.' },
    { expr: 'cos(x)',            explanation: 'cos(−x)=cos(x) for all x.' },
    { expr: 'x^6 - x^2 + 1',      explanation: 'All exponents are even: 6 and 2.' },
    { expr: '|x|',               explanation: '|−x| = |x| by definition.' }
  ];
  
  export function generateEvenFunctionQuestion(difficulty) {
    const tpl   = pick(templates);
    const style = pick(['tf','mcq','proof']);
  
    let question, options, answer;
    if (style === 'tf') {
      question = `True or False: f(x) = ${tpl.expr} is an even function.`;
      options  = ['True','False'];
      answer   = 'True';
    } else if (style === 'mcq') {
      question = `Is the function f(x) = ${tpl.expr} even?`;
      options  = ['Yes','No'];
      answer   = 'Yes';
    } else { // proof
      question = `Prove that f(x) = ${tpl.expr} is an even function.`;
      options  = [];
      answer   = tpl.explanation;
    }
  
    return { question, options, answer };
  }
  