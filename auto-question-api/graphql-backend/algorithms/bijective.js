// algorithms/bijective.js

// A small utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates for various functions and their bijectivity
  const templates = [
    {
      expr: '2x + 3',
      isBijective: true,
      explanation: 'Linear f(x)=ax+b with a≠0 is both one‑to‑one and onto ℝ→ℝ.'
    },
    {
      expr: 'x^2',
      isBijective: false,
      explanation: 'x^2 fails injectivity (f(2)=f(-2)) over ℝ→ℝ.'
    },
    {
      expr: 'e^x',
      isBijective: false,
      explanation: 'e^x fails surjectivity (never hits non‑positive values) over ℝ→ℝ.'
    },
    {
      expr: 'tan(x)',
      isBijective: true,
      explanation: 'tan: (−π/2,π/2)→ℝ is strictly increasing and covers all real outputs.'
    },
    {
      expr: 'sin(x)',
      isBijective: false,
      explanation: 'sin(x) is neither one‑to‑one nor onto ℝ over ℝ→ℝ.'
    }
  ];
  
  export function generateBijectiveQuestion(difficulty) {
    const tpl = pick(templates);
    const style = pick(['tf','mcq','proof']);
  
    let question, options, answer;
    if (style === 'tf') {
      question = `True or False: f(x) = ${tpl.expr} is bijective over ℝ→ℝ.`;
      options  = ['True','False'];
      answer   = tpl.isBijective ? 'True' : 'False';
    } else if (style === 'proof') {
      question = `Prove or disprove: f(x) = ${tpl.expr} is bijective over ℝ→ℝ.`;
      options  = [];
      answer   = tpl.explanation;
    } else {
      question = `Is f(x) = ${tpl.expr} bijective over ℝ→ℝ?`;
      options  = ['Yes','No'];
      answer   = tpl.isBijective ? 'Yes' : 'No';
    }
  
    return { question, options, answer };
  }
  