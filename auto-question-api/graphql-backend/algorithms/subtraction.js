// algorithms/subtraction.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // A few sample templates for (h, g) pairs
  const templates = [
    { h: 'x^2 + 3x + 2',    g: 'x + 1'      },
    { h: '2x^2 - x',         g: 'x^2 + 1'    },
    { h: 'sin(x)',           g: 'cos(x)'     },
    { h: 'e^x',              g: 'ln(x)'      },
    { h: 'x^3',              g: '2x - 5'     },
  ];
  
  export function generateSubtractionQuestion(difficulty) {
    const tpl = pick(templates);
    const { h, g } = tpl;
    const diffExpr = `(${h}) - (${g})`;
  
    // Question styles
    const styles = ['compute', 'tf', 'proof'];
    const style  = pick(styles);
  
    let question, options, answer;
  
    if (style === 'compute') {
      question = `Given h(x) = ${h} and g(x) = ${g}, compute (h - g)(x).`;
      options  = [
        diffExpr,
        h,
        g,
        `${h} + ${g}`
      ];
      answer   = diffExpr;
    }
    else if (style === 'tf') {
      question = `True or False: (h - g)(x) = (g - h)(x) for h(x) = ${h} and g(x) = ${g}.`;
      options  = ['True','False'];
      answer   = 'False';
    }
    else { // proof
      question = `Prove that (h - g)(x) = -(g - h)(x) for h(x) = ${h} and g(x) = ${g}.`;
      options  = [];
      answer   = `By definition, (h-g)(x)=h(x)-g(x)=-(g(x)-h(x))=(g-h)(x) with minus sign.`;
    }
  
    return { question, options, answer };
  }
  