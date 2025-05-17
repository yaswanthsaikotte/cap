// algorithms/factorial.js

// Helper: pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Precompute factorials 0! through 10!
  const factorials = Array.from({ length: 11 }, (_, n) => ({
    n,
    value: [1,1,2,6,24,120,720,5040,40320,362880,3628800][n]
  }));
  
  export function generateFactorialQuestion(difficulty) {
    // Pick a random n between 0 and 10
    const { n, value: correct } = pick(factorials);
  
    // Choose a style
    const styles = ['compute', 'tf', 'identity', 'combinatorics'];
    const style  = styles[Math.floor(Math.random() * styles.length)];
  
    let question, options, answer;
    if (style === 'compute') {
      // Direct computation
      question = `What is ${n}!?`;
      // Build three distractors: factorial(n-1), factorial(n+1), random
      const distractors = new Set();
      if (n > 0) distractors.add(factorials[n-1].value);
      if (n < 10) distractors.add(factorials[n+1].value);
      while (distractors.size < 3) {
        distractors.add(Math.floor(Math.random() * 40000));
      }
      options = [correct, ...distractors];
      // Shuffle
      options = options.sort(() => 0.5 - Math.random());
      answer = String(correct);
  
    } else if (style === 'tf') {
      // True/False statement
      const wrong = pick(factorials.filter(f => f.value !== correct));
      question = `True or False: ${n}! = ${wrong.value}.`;
      options  = ['True', 'False'];
      answer   = 'False';
  
    } else if (style === 'identity') {
      // Given factorial value, find n
      question = `If n! = ${correct}, what is n?`;
      options  = [n, ...pick([
        factorials[(n+1)%11].n,
        factorials[(n+2)%11].n,
        factorials[(n+3)%11].n
      ],), pick(factorials).n ].map(String);
      // ensure correct is included
      if (!options.includes(String(n))) options[0] = String(n);
      options = options.sort(() => 0.5 - Math.random());
      answer  = String(n);
  
    } else {
      // Combinatorics context
      question = `In how many ways can ${n} distinct objects be arranged in a row?`;
      options  = [correct, factorials[(n+1)%11].value, factorials[(n>0?n-1:1)].value, Math.max(1, correct/2)];
      options  = options.map(String).sort(() => 0.5 - Math.random());
      answer   = String(correct);
    }
  
    return { question, options, answer };
  }
  