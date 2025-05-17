// algorithms/bijectiveIsomorphism.js

// Helper to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Templates for φ: domain → domain
  const templates = [
    {
      domain: 'ℤ under addition',
      expr: '2x',
      isIso: false,
      reason: 'φ(x)=2x is injective but not surjective on ℤ (odd integers are not in the image).'
    },
    {
      domain: 'ℝ under addition',
      expr: '2x',
      isIso: true,
      reason: 'Multiplication by 2 on ℝ is bijective (nonzero scalar) and preserves addition.'
    },
    {
      domain: 'ℝ* under multiplication',
      expr: '1/x',
      isIso: true,
      reason: 'φ(x)=1/x is its own inverse on ℝ* and preserves multiplication.'
    },
    {
      domain: 'ℝ* under multiplication',
      expr: 'x^3',
      isIso: true,
      reason: 'Odd power on nonzero reals is bijective and preserves multiplication.'
    },
    {
      domain: 'ℤ/5ℤ under addition mod 5',
      expr: '2x mod 5',
      isIso: true,
      reason: 'gcd(2,5)=1 so φ is a bijection on ℤ/5ℤ that preserves addition mod 5.'
    },
    {
      domain: 'ℤ/6ℤ under addition mod 6',
      expr: '2x mod 6',
      isIso: false,
      reason: 'gcd(2,6)=2 so φ fails injectivity on ℤ/6ℤ (kernel nontrivial).'
    }
  ];
  
  export function generateBijectiveIsomorphismQuestion(difficulty) {
    const tpl   = pick(templates);
    const style = pick(['definition','true_false','proof','conceptual']);
  
    let question, options, answer;
  
    if (style === 'definition') {
      question = 'Which of the following best defines a bijective homomorphism (isomorphism)?';
      options  = [
        'A one-to-one and onto structure-preserving map between algebraic structures',
        'A map that preserves structure but need not be injective or surjective',
        'Any bijective function between sets',
        'A surjective function that is not necessarily a homomorphism'
      ];
      answer   = options[0];
  
    } else if (style === 'true_false') {
      question = `True or False: φ: ${tpl.domain} → ${tpl.domain} defined by φ(x) = ${tpl.expr} is an isomorphism.`;
      options  = ['True','False'];
      answer   = tpl.isIso ? 'True' : 'False';
  
    } else if (style === 'proof') {
      question = `Prove or disprove that φ: ${tpl.domain} → ${tpl.domain} defined by φ(x) = ${tpl.expr} is an isomorphism.`;
      options  = [];
      answer   = tpl.reason;
  
    } else {
      // conceptual
      question = `Explain why φ: ${tpl.domain} → ${tpl.domain} defined by φ(x) = ${tpl.expr} ` +
                 `${tpl.isIso ? 'is' : 'is not'} an isomorphism.`;
      options  = [];
      answer   = tpl.reason;
    }
  
    return { question, options, answer };
  }
  