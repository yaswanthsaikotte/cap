// algorithms/multiplication.js

// Utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Sample (h, g) templates
  const templates = [
    { h: 'x^2 + 1',    g: 'x - 3'     },
    { h: 'e^x',        g: 'x^2'       },
    { h: 'sin(x)',     g: 'cos(x)'    },
    { h: '1/x',        g: 'x^2 + 2x'  },
    { h: '2x - 5',     g: '3x + 1'    },
  ];
  
  export function generateMultiplicationQuestion(difficulty) {
    const tpl = pick(templates);
    const { h, g } = tpl;
    const prodExpr = `(${h}) * (${g})`;
  
    // Question styles
    const styles = ['compute', 'tf', 'proof'];
    const style  = pick(styles);
  
    let question, options, answer;
    if (style === 'compute') {
      question = `Given h(x) = ${h} and g(x) = ${g}, compute (h · g)(x).`;
      options  = [
        prodExpr,
        `${h} + ${g}`,
        `${h} - ${g}`,
        `(h ∘ g)(x)`
      ];
      answer   = prodExpr;
    } else if (style === 'tf') {
      question = `True or False: (h · g)(x) = (g · h)(x) for h(x) = ${h} and g(x) = ${g}.`;
      options  = ['True','False'];
      answer   = 'True';
    } else { // proof
      question = `Prove that function multiplication is commutative: (h · g)(x) = (g · h)(x).`;
      options  = [];
      answer   = `By definition, h(x)·g(x)=g(x)·h(x), so (h·g)(x)=(g·h)(x).`;
    }
  
    return { question, options, answer };
  }
  