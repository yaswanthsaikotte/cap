// algorithms/floorCeiling.js

// Utility to pick a random element
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Generate a random real number with two decimal places
  function randomX() {
    return parseFloat((Math.random() * 20 - 10).toFixed(2));
  }
  
  export function generateFloorCeilingQuestion(difficulty) {
    // Decide whether to ask about floor or ceiling
    const type = pick(['floor', 'ceiling']);
    const x    = randomX();
    const correct = type === 'floor'
      ? Math.floor(x)
      : Math.ceil(x);
  
    // Build the question
    let question, options, answer;
    if (difficulty === 'Easy' || difficulty === 'Medium') {
      // Multiple-choice style
      question = `Compute ${type === 'floor' ? '⌊' : '⌈'}${x}${type === 'floor' ? '⌋' : '⌉'}.`;
      // generate three distractors around the correct value
      const distractors = new Set();
      while (distractors.size < 3) {
        const delta = pick([-2, -1, 1, 2]);
        distractors.add(correct + delta);
      }
      options = pick([
        [correct, ...Array.from(distractors)],            // correct first
        [...Array.from(distractors), correct]             // correct last
      ]);
      answer = correct;
    } else {
      // True/False style
      question = `True or False: ${type === 'floor' ? '⌊' : '⌈'}${x}${type === 'floor' ? '⌋' : '⌉'} = ${correct}.`;
      options  = ['True', 'False'];
      answer   = 'True';
    }
  
    return { question, options, answer: String(answer) };
  }
  