// algorithms/partial.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function generatePartialFunctionQuestion(difficulty) {
    const styles = ['identify', 'domain', 'composition', 'graph'];
    const style  = pick(styles);
  
    let question, options, answer;
  
    if (style === 'identify') {
      // Identify if partial or total
      const funcs = [
        { expr: 'f(x) = x^2',         kind: 'Total' },
        { expr: 'f(x) = √x',          kind: 'Partial' },
        { expr: 'f(x) = 1/x',         kind: 'Partial' },
        { expr: 'f(x) = log(x)',      kind: 'Partial' },
        { expr: 'f(x) = x + 5',       kind: 'Total' },
      ];
      const tpl = pick(funcs);
      question = `Is the function ${tpl.expr} partial or total?`;
      options  = ['Partial','Total'];
      answer   = tpl.kind;
  
    } else if (style === 'domain') {
      // Ask for the domain of a partial function
      const funcs = [
        { expr: '√(x - 3)',   dom: 'x ≥ 3' },
        { expr: '1/(x + 1)',  dom: 'x ≠ -1' },
        { expr: 'log(x)',     dom: 'x > 0' },
        { expr: '√x',         dom: 'x ≥ 0' }
      ];
      const tpl = pick(funcs);
      question = `Determine the domain of f(x) = ${tpl.expr}.`;
      options  = [tpl.dom, 'All real x', 'x > 1', 'x < 0'];
      answer   = tpl.dom;
  
    } else if (style === 'composition') {
      // Composition domain question
      const pairs = [
        { f: '1/x',        g: 'x + 2' },
        { f: '√(x - 2)',   g: 'x^2' },
        { f: 'log(x)',     g: 'x - 1' },
        { f: '1/(x-3)',    g: '2x' }
      ];
      const tpl = pick(pairs);
      question = `If f(x) = ${tpl.f} and g(x) = ${tpl.g}, what is the domain of g(f(x))?`;
      // brief answer (students should explain)
      answer   = 'Values of x where f(x) is defined and then g(f(x)) is defined';
      options  = [
        answer,
        'All real x',
        'x where g(x) defined only',
        'x where f(x) defined only'
      ];
  
    } else {
      // Graph‑based identification
      question = `Given a graph with missing points or asymptotes, identify where the function is undefined.`;
      options  = [
        'At breaks or vertical asymptotes',
        'Nowhere, it is defined everywhere',
        'Only at x = 0',
        'Only at integer x'
      ];
      answer   = 'At breaks or vertical asymptotes';
    }
  
    return { question, options, answer };
  }
  