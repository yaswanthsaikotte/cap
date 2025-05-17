// algorithms/odd.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates of functions guaranteed to be odd
  const templates = [
    { expr: 'x^3',               explanation: 'x^3 changes sign: (−x)^3=−x^3.' },
    { expr: 'sin(x)',            explanation: 'sin(−x)=−sin(x) for all x.' },
    { expr: 'x^5 - x',           explanation: 'All terms have odd powers: 5 and 1.' },
    { expr: 'x',                 explanation: 'Identity is odd: (−x)=−x.' },
    { expr: '3x^7 - 2x^3 + x',   explanation: 'All exponents are odd: 7,3,1.' }
  ];
  
  export function generateOddFunctionQuestion(difficulty) {
    const tpl   = pick(templates);
    const style = pick(['tf','mcq','proof']);
  
    let question, options, answer;
    if (style === 'tf') {
      question = `True or False: f(x) = ${tpl.expr} is an odd function.`;
      options  = ['True','False'];
      answer   = 'True';
    } else if (style === 'mcq') {
      question = `Is the function f(x) = ${tpl.expr} odd?`;
      options  = ['Yes','No'];
      answer   = 'Yes';
    } else { // proof
      question = `Prove that f(x) = ${tpl.expr} is an odd function.`;
      options  = [];
      answer   = tpl.explanation;
    }
  
    return { question, options, answer };
  }
  