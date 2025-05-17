// algorithms/inverse.js

// Utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates for functions with their inverses and explanations
  const templates = [
    {
      expr: '2x + 3',
      inverse: '(x - 3) / 2',
      explanation: 'Solve y = 2x + 3 ⇒ x = (y - 3)/2.'
    },
    {
      expr: '3x - 2',
      inverse: '(x + 2) / 3',
      explanation: 'Solve y = 3x - 2 ⇒ x = (y + 2)/3.'
    },
    {
      expr: 'e^x',
      inverse: 'ln(x)',
      explanation: 'Inverse of e^x is ln(x).'
    },
    {
      expr: 'ln(x)',
      inverse: 'e^x',
      explanation: 'Inverse of ln(x) is e^x.'
    },
    {
      expr: 'x^3',
      inverse: '∛x',
      explanation: 'Inverse of x^3 is the cube root ∛x.'
    }
  ];
  
  export function generateInverseQuestion(difficulty) {
    const tpl = pick(templates);
    const style = pick(['compute', 'tf', 'proof']);
  
    let question, options, answer;
    if (style === 'compute') {
      question = `Find the inverse function of f(x) = ${tpl.expr}.`;
      options = [
        tpl.inverse,
        pick(templates).inverse,
        'x',
        'Does not exist'
      ];
      answer = tpl.inverse;
    } else if (style === 'tf') {
      question = `True or False: The inverse of f(x) = ${tpl.expr} is f⁻¹(x) = ${tpl.inverse}.`;
      options = ['True', 'False'];
      answer = 'True';
    } else { // proof
      question = `Prove that the inverse of f(x) = ${tpl.expr} is f⁻¹(x) = ${tpl.inverse}.`;
      options = [];
      answer = tpl.explanation;
    }
  
    return { question, options, answer };
  }
  