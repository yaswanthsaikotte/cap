// algorithms/surjective.js
// A simple JS version of your Python logic for surjectivity questions

const funcs = [
    {
      expr: '2x + 3',
      isSurjective: true,
      explanation: 'For any real y, x = (y – 3)/2 is real, so f(x)=2x+3 is onto ℝ.'
    },
    {
      expr: 'x^2',
      isSurjective: false,
      explanation: 'x^2 ≥ 0, so negative y have no preimage over ℝ.'
    },
    {
      expr: 'e^x',
      isSurjective: false,
      explanation: 'e^x > 0 for all x, so it never hits non‐positive y over ℝ→ℝ.'
    },
    {
      expr: 'ln(x)',
      isSurjective: false,
      explanation: 'Domain is x>0, so it cannot produce negative infinity in ℝ→ℝ.'
    },
    {
      expr: 'tan(x)',
      isSurjective: true,
      explanation: 'tan:ℝ→ℝ hits every real value (vertical asymptotes aside), so onto ℝ.'
    },
  ];
  
  export function generateSurjectiveQuestion(difficulty) {
    // Pick one template at random
    const tpl = funcs[Math.floor(Math.random() * funcs.length)];
  
    // Decide question style
    const styles = ['tf', 'proof', 'mcq'];
    const style = styles[Math.floor(Math.random() * styles.length)];
  
    let question, options, answer;
    if (style === 'tf') {
      question = `True or False: The function f(x) = ${tpl.expr} is surjective over ℝ→ℝ.`;
      options = ['True','False'];
      answer  = tpl.isSurjective ? 'True' : 'False';
    } else if (style === 'proof') {
      question = `Prove or disprove: f(x) = ${tpl.expr} is surjective over ℝ→ℝ.`;
      options = [];
      answer  = tpl.explanation;
    } else { // mcq
      question = `Is the function f(x) = ${tpl.expr} surjective over ℝ→ℝ?`;
      options = ['Yes','No'];
      answer  = tpl.isSurjective ? 'Yes' : 'No';
    }
  
    return { question, options, answer };
  }
  