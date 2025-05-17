// algorithms/injectiveHomomorphism.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function generateInjectiveHomomorphismQuestion(difficulty) {
    const styles = ['definition', 'true_false', 'kernel', 'mapping'];
    const style  = pick(styles);
  
    let question, options, answer;
  
    if (style === 'definition') {
      question = 'What is an injective homomorphism?';
      options  = [
        'A one-to-one structure-preserving map between algebraic structures',
        'A map that is surjective but not necessarily structure-preserving',
        'Any function between sets',
        'A map that is structure-preserving and onto'
      ];
      answer   = 'A one-to-one structure-preserving map between algebraic structures';
  
    } else if (style === 'true_false') {
      const stmt = pick([
        'If φ: G → H is injective then ker(φ) = {e_G}.',
        'An injective homomorphism must be surjective.',
        'If φ is injective then φ(a) = φ(b) implies a = b.',
        'Every homomorphism is injective by definition.'
      ]);
      question = `True or False: ${stmt}`;
      options  = ['True','False'];
      answer   = (stmt === 'If φ: G → H is injective then ker(φ) = {e_G}.' ||
                  stmt === 'If φ is injective then φ(a) = φ(b) implies a = b.')
                 ? 'True' : 'False';
  
    } else if (style === 'kernel') {
      const kernelSize = pick([1, 2, 3]);
      question = `If φ: G → H is a homomorphism and |ker(φ)| = ${kernelSize}, is φ injective?`;
      options  = ['Yes','No'];
      answer   = (kernelSize === 1) ? 'Yes' : 'No';
  
    } else {
      // mapping style
      question = 
        'Consider the map φ on set {a,b,c}: φ(a)=x, φ(b)=y, φ(c)=x. ' +
        'Is φ an injective homomorphism?';
      options = ['Yes','No'];
      answer  = 'No';
    }
  
    return { question, options, answer };
  }
  