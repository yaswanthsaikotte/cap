// algorithms/composition.js

// Helper: pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates of pairs (f, g)
  const templates = [
    { f: 'x + 1',      g: 'x^2' },
    { f: '2x',         g: 'x + 3' },
    { f: 'x^2',        g: '2x - 1' },
    { f: 'e^x',        g: 'ln(x)' },
    { f: 'sin(x)',     g: 'x + Math.PI/2' },
  ];
  
  export function generateCompositionQuestion(difficulty) {
    const tpl = pick(templates);
    const { f, g } = tpl;
  
    // Build the composed expressions as strings
    // g(f(x)) → replace 'x' in g with `(f)`
    const compose = expr => g.replace(/x/g, `(${expr})`);
  
    const gf = compose(f);
    const fg = f.replace(/x/g, `(${g})`); // f(g(x))
  
    // Choose question style
    const style = pick(['compute','compare','proof']);
  
    let question, options, answer;
    if (style === 'compute') {
      question = `Given f(x) = ${f} and g(x) = ${g}, what is (g ∘ f)(x)?`;
      options = [gf, fg, f, g];
      answer  = gf;
    } else if (style === 'compare') {
      question = `Is (g ∘ f)(x) = (f ∘ g)(x) for f(x) = ${f} and g(x) = ${g}?`;
      options  = ['Yes','No'];
      answer   = gf === fg ? 'Yes' : 'No';
    } else /* proof */ {
      question = `Prove or disprove that (g ∘ f)(x) = (f ∘ g)(x) for f(x) = ${f} and g(x) = ${g}.`;
      options = [];
      answer  = `Compute g(f(x)) = ${gf} and f(g(x)) = ${fg}; they are ${gf===fg?'equal':'not equal'}.`;
    }
  
    return { question, options, answer };
  }
  