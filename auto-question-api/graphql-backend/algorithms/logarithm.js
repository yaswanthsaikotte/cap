// algorithms/logarithm.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Helper to get a random integer between min and max inclusive
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const BASES = [2, 3, 5, 10];
  
  export function generateLogQuestion(difficulty) {
    const styles = ['evaluate', 'solve', 'property', 'change_base'];
    const style  = pick(styles);
  
    let question, options, answer;
  
    if (style === 'evaluate') {
      // Evaluate a numeric log
      const base = pick(BASES);
      const exp  = randInt(1, 5);
      const value = base ** exp;
      question = `Evaluate: log_${base}(${value}).`;
      options  = [
        String(exp),
        String(exp + 1),
        String(exp - 1),
        String(exp * base)
      ];
      answer   = String(exp);
  
    } else if (style === 'solve') {
      // Solve an exponential equation
      const base = pick(BASES);
      const exp  = randInt(1, 5);
      const result = base ** exp;
      question = `Solve for x: ${base}^x = ${result}.`;
      options  = [
        String(exp),
        String(result),
        String(base),
        String(exp + 1)
      ];
      answer   = String(exp);
  
    } else if (style === 'property') {
      // Identify a log property
      const props = [
        { name: 'Product Rule',  stmt: 'log_b(xy) = log_b(x) + log_b(y)' },
        { name: 'Quotient Rule', stmt: 'log_b(x/y) = log_b(x) - log_b(y)' },
           { name: 'Power Rule',    stmt: 'log_b(x^c) = c log_b(x)' }
      ];
      const tpl = pick(props);
      question = `Which property is described by: ${tpl.stmt}?`;
      options  = props.map(p => p.name);
      answer   = tpl.name;
  
    } else {
      // Change‑of‑base formula
      const base = pick(BASES);
      question = `Express log_${base}(x) in terms of natural logarithms.`;
      options  = [];
      answer   = `log_${base}(x) = ln(x) / ln(${base})`;
    }
  
    return { question, options, answer };
  }
  