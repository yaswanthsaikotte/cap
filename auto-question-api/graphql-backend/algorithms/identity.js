// algorithms/identity.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function generateIdentityQuestion(difficulty) {
    const styles = ['definition', 'graph', 'composition', 'inverse', 'application'];
    const style  = pick(styles);
  
    let question, options, answer;
  
    if (style === 'definition') {
      question = 'Which of the following defines the identity function f?';
      options  = [
        'f(x) = x',
        'f(x) = 0',
        'f(x) = 1',
        'f(x) = x^2'
      ];
      answer   = 'f(x) = x';
  
    } else if (style === 'graph') {
      question = 'What is the graph of the identity function f(x)=x?';
      options  = [
        'A straight line through the origin with slope 1',
        'A parabola opening upwards',
        'A horizontal line y=1',
        'A vertical line x=0'
      ];
      answer   = 'A straight line through the origin with slope 1';
  
    } else if (style === 'composition') {
      question = 'Given f(x)=x (identity) and g(x)=x+3, what is (f ∘ g)(x)?';
      options  = [
        'x + 3',
        'x',
        '3',
        'f(x) + g(x)'
      ];
      answer   = 'x + 3';
  
    } else if (style === 'inverse') {
      question = 'What is the inverse of the identity function f(x)=x?';
      options  = [
        'f⁻¹(x) = x',
        'f⁻¹(x) = -x',
        'f⁻¹(x) = 1/x',
        'f⁻¹ does not exist'
      ];
      answer   = 'f⁻¹(x) = x';
  
    } else {
      // application
      question = 'Which function acts as the neutral element under composition?';
      options  = [
        'Identity function',
        'Zero function',
        'Constant function f(x)=1',
        'Shift function f(x)=x+1'
      ];
      answer   = 'Identity function';
    }
  
    return { question, options, answer };
  }
  