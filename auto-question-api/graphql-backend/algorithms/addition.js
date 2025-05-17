// algorithms/addition.js

// Utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Some sample (f, g) pairs
  const templates = [
    { f: 'x^2',      g: '2x + 1'         },
    { f: 'sin(x)',   g: 'cos(x)'         },
    { f: 'e^x',      g: 'ln(x)'          },
    { f: 'x^3',      g: 'x - 2'          },
    { f: '|x|',      g: 'x^2 + 1'        },
    { f: 'tan(x)',   g: 'x'              },
  ];
  
  export function generateAdditionQuestion(difficulty) {
    const tpl = pick(templates);
    const { f, g } = tpl;
    const sumExpr = `(${f}) + (${g})`;
  
    const styles = ['compute', 'tf', 'proof'];
    const style  = pick(styles);
  
    let question, options, answer;
  
    if (style === 'compute') {
      question = `Given f(x) = ${f} and g(x) = ${g}, compute (f + g)(x).`;
      options  = [ sumExpr, f, g, `(f⋅g)(x)` ];
      answer   = sumExpr;
    }
    else if (style === 'tf') {
      question = `True or False: (f + g)(x) = (g + f)(x) for all x, where f(x) = ${f} and g(x) = ${g}.`;
      options  = ['True','False'];
      answer   = 'True';
    }
    else { // proof
      question = `Prove that addition of functions is commutative: (f + g)(x) = (g + f)(x).`;
      options  = [];
      answer   = 'By definition, (f+g)(x)=f(x)+g(x)=g(x)+f(x)=(g+f)(x).';
    }
  
    return { question, options, answer };
  }
  