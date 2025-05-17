// algorithms/division.js

// Utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Sample (f, g) templates for division
  const templates = [
    { f: 'x^2 + 2x + 1',    g: 'x - 3'       },
    { f: 'sin(x) + 2',      g: 'x - 1'       },
    { f: 'e^x',             g: 'ln(x)'       },
    { f: 'x^3 - x',         g: 'x + 2'       },
    { f: '2x + 5',          g: 'x^2 + 1'     },
  ];
  
  export function generateDivisionQuestion(difficulty) {
    const tpl = pick(templates);
    const { f, g } = tpl;
    const divExpr = `(${f}) / (${g})`;
  
    const styles = ['compute', 'tf', 'proof'];
    const style  = pick(styles);
  
    let question, options, answer;
    if (style === 'compute') {
      question = `Given f(x) = ${f} and g(x) = ${g}, compute (f/g)(x).`;
      options  = [
        divExpr,
        `${f} + ${g}`,
        `${f} * ${g}`,
        `(${g}) / (${f})`
      ];
      answer   = divExpr;
    } else if (style === 'tf') {
      question = `True or False: (f/g)(x) = (g/f)(x) for f(x) = ${f} and g(x) = ${g}.`;
      options  = ['True','False'];
      answer   = 'False';
    } else { // proof
      question = `Explain why (f/g)(x) ≠ (g/f)(x) in general, for f(x) = ${f} and g(x) = ${g}.`;
      options  = [];
      answer   = `Because f(x)/g(x) = g(x)/f(x) only when f(x)=±g(x). In general, division is not commutative.`;
    }
  
    return { question, options, answer };
  }
  