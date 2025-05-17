// algorithms/permutation.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Precompute factorials up to 20
  const factorial = n => {
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  };
  
  export function generatePermutationQuestion(difficulty) {
    // Decide question style
    const style = pick(['numerical', 'conceptual']);
  
    let question, options, answer;
    if (style === 'numerical') {
      // Numerical P(n, r) = n! / (n - r)!
      const n = Math.floor(Math.random() * 11) + 5;   // 5 ≤ n ≤ 15
      const r = Math.floor(Math.random() * n) + 1;    // 1 ≤ r ≤ n
      const correct = factorial(n) / factorial(n - r);
      const combination = factorial(n) / (factorial(r) * factorial(n - r));
      const rFact = factorial(r);
      const power = n ** r;
  
      question = `How many ways can you arrange ${r} objects from a set of ${n} distinct objects?`;
      options  = [
        String(correct),
        String(combination),
        String(rFact),
        String(power)
      ];
      // Shuffle options
      options = options.sort(() => 0.5 - Math.random());
      answer  = String(correct);
  
    } else {
      // Conceptual
      question = `Which of the following scenarios is an example of a permutation (order matters)?`;
      options  = [
        'A) Selecting 3 students from a class to form a committee',
        'B) Arranging 5 books on a shelf',
        'C) Choosing 4 questions to answer from a 10-question test',
        'D) Distributing identical candies to 5 children'
      ];
      answer   = 'B) Arranging 5 books on a shelf';
    }
  
    return { question, options, answer };
  }
  