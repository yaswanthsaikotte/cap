// algorithms/modularOperations.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Helper to get a random integer between min and max inclusive
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function generateModularOperationsQuestion(difficulty) {
    const ops = ['addition', 'subtraction', 'multiplication', 'composition', 'division'];
    const op  = pick(ops);
    const m   = pick([5, 7, 11]);
  
    // Generate two random linear functions f(x)=a x + b, g(x)=c x + d
    const a = randInt(0, m-1), b = randInt(0, m-1);
    const c = randInt(0, m-1), d = randInt(0, m-1);
    const exprF = `${a}x + ${b}`;
    const exprG = `${c}x + ${d}`;
  
    let question, options = [], answer;
  
    if (op === 'addition') {
      question = `Compute (f + g)(x) mod ${m} where f(x) = ${exprF} and g(x) = ${exprG}.`;
      const A = (a + c) % m, B = (b + d) % m;
      answer   = `${A}x + ${B}  (mod ${m})`;
      options  = [
        answer,
        `${a + c}x + ${b + d}`,
        `${((a - c + m) % m)}x + ${((b - d + m) % m)}`,
        `${((a * c) % m)}x + ${((b * d) % m)}`
      ];
  
    } else if (op === 'subtraction') {
      question = `Compute (f - g)(x) mod ${m} where f(x) = ${exprF} and g(x) = ${exprG}.`;
      const A = (a - c + m) % m, B = (b - d + m) % m;
      answer   = `${A}x + ${B}  (mod ${m})`;
      options  = [
        answer,
        `${a - c}x + ${b - d}`,
        `${((a + c) % m)}x + ${((b + d) % m)}`,
        `${((a * c) % m)}x + ${((b * d) % m)}`
      ];
  
    } else if (op === 'multiplication') {
      question = `Compute (f · g)(x) mod ${m} where f(x) = ${exprF} and g(x) = ${exprG}.`;
      // (a x + b)(c x + d) = ac x^2 + (ad+bc)x + bd, reduce coeff mod m
      const A2 = (a * c) % m;
      const A1 = (a * d + b * c) % m;
      const A0 = (b * d) % m;
      answer   = `${A2}x^2 + ${A1}x + ${A0}  (mod ${m})`;
      options  = [
        answer,
        `${(a*c)}x^2 + ${(a*d + b*c)}x + ${b*d}`,
        `${((a + c) % m)}x + ${((b + d) % m)}`,
        `${((a - c + m) % m)}x + ${((b - d + m) % m)}`
      ];
  
    } else if (op === 'composition') {
      question = `Compute (f ∘ g)(x) mod ${m} where f(x) = ${exprF} and g(x) = ${exprG}.`;
      // f(g(x)) = a(cx+d) + b = ac x + (a d + b)
      const A = (a * c) % m;
      const B = (a * d + b) % m;
      answer   = `${A}x + ${B}  (mod ${m})`;
      options  = [
        answer,
        `${a*c}x + ${a*d + b}`,
        `${(c*a)}x + ${(c*b + d*a)}`,
        `${((a + c) % m)}x + ${((b + d) % m)}`
      ];
  
    } else { // division
      question = `Compute (f / g)(x) mod ${m} where f(x) = ${exprF} and g(x) = ${exprG}, if the inverse of g(x) exists.`;
      // g(x) mod m = c x + d. We pretend g(x) is constant invertible: use modular inverse of d if c=0
      if (c === 0 && d % m !== 0) {
        // only b / d
        const invD = (() => {
          for (let i = 1; i < m; i++) if ((d * i) % m === 1) return i;
          return null;
        })();
        if (invD !== null) {
          const A = (a * invD) % m;
          const B = (b * invD) % m;
          answer = `${A}x + ${B}  (mod ${m})`;
          options = [
            answer,
            `${(a/d)}x + ${(b/d)}`,
            `${((a - c + m) % m)}x + ${((b - d + m) % m)}`,
            'Division not possible'
          ];
        } else {
          answer = 'Division not possible';
          options = ['Division not possible', answer, 'Any value', 'Zero function'];
        }
      } else {
        answer = 'Division not possible';
        options = ['Division not possible', `${exprF}`, `${exprG}`, 'Modular inverse always exists'];
      }
    }
  
    // shuffle options
    options = options.sort(() => 0.5 - Math.random());
  
    return { question, options, answer };
  }
  