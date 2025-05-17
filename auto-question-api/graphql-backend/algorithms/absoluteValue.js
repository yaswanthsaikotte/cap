// algorithms/absoluteValue.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Helper to get a random integer between min and max inclusive
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function generateAbsoluteValueQuestion(difficulty) {
    const styles = ['compute', 'equation', 'inequality', 'transformation'];
    const style  = pick(styles);
    let question, options, answer;
  
    if (style === 'compute') {
      // Compute |x|
      const x = randInt(-10, 10);
      question = `What is |${x}|?`;
      options  = [Math.abs(x), -Math.abs(x), x, -x].map(String);
      answer   = String(Math.abs(x));
  
    } else if (style === 'equation') {
      // Solve |x + a| = b
      const a = randInt(-5, 5);
      const b = randInt(1, 8);
      question = `Solve |x ${a >= 0 ? `+ ${a}` : `- ${-a}`}| = ${b}.`;
      // solutions are ±b minus a
      const sol1 = b - a;
      const sol2 = -b - a;
      options  = [ `${sol1}, ${sol2}`, `${sol1}`, `${sol2}`, 'No solution' ];
      answer   = `${sol1}, ${sol2}`;
  
    } else if (style === 'inequality') {
      // Solve |x + a| < b or > b
      const a = randInt(-5, 5);
      const b = randInt(1, 8);
      const cmp = pick(['<', '>']);
      question = `Solve |x ${a >= 0 ? `+ ${a}` : `- ${-a}`}| ${cmp} ${b}.`;
      if (cmp === '<') {
        // -b < x+a < b  ⇒  -b - a < x < b - a
        const left  = -b - a;
        const right =  b - a;
        options = [
          `${left} < x < ${right}`,
          `x < ${left} or x > ${right}`,
          `${left} ≤ x ≤ ${right}`,
          'All real x'
        ];
        answer = `${left} < x < ${right}`;
      } else {
        // |…| > b ⇒ x+a < -b  or x+a > b  ⇒ x < -b - a or x > b - a
        const left  = -b - a;
        const right =  b - a;
        options = [
          `x < ${left} or x > ${right}`,
          `${left} < x < ${right}`,
          `x ≤ ${left} or x ≥ ${right}`,
          'No real solution'
        ];
        answer = `x < ${left} or x > ${right}`;
      }
  
    } else {
      // Graph transformation
      // vertical shift: |x| + c, horizontal: |x - c|
      const tType = pick(['vertical', 'horizontal']);
      const c     = randInt(1, 5);
      if (tType === 'vertical') {
        question = `What transformation of f(x)=|x| produces g(x)=|x| + ${c}?`;
        options  = [
          `Shift up by ${c}`,
          `Shift down by ${c}`,
          `Shift right by ${c}`,
          `Shift left by ${c}`
        ];
        answer   = `Shift up by ${c}`;
      } else {
        question = `What transformation of f(x)=|x| produces g(x)=|x - ${c}|?`;
        options  = [
          `Shift right by ${c}`,
          `Shift left by ${c}`,
          `Shift up by ${c}`,
          `Shift down by ${c}`
        ];
        answer   = `Shift right by ${c}`;
      }
    }
  
    return { question, options, answer };
  }
  