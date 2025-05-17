// algorithms/functionDefinition.js
import random from 'random';

// Level 1: Mapping
function generateMappingQuestion() {
  const domain = ['A', 'B', 'C', 'D'];
  const codomain = ['1', '2', '3', '4'];
  const mappings = {};

  for (let d of domain) {
    mappings[d] = codomain[Math.floor(Math.random() * codomain.length)];
  }

  const isFunction = Math.random() > 0.5;
  if (!isFunction) {
    const duplicateKey = domain[Math.floor(Math.random() * domain.length)];
    mappings[duplicateKey] = codomain[Math.floor(Math.random() * codomain.length)];
  }

  const question = `Is the following mapping a function? ${JSON.stringify(mappings)}`;
  const answer = isFunction ? "Yes" : "No";
  return { question, options: ["Yes", "No"], answer };
}

// Level 2: Ordered Pairs
function generateOrderedPairsQuestion() {
  const domain = [1, 2, 3, 4, 5];
  const codomain = [10, 11, 12, 13, 14];
  const pairs = domain.map(x => [x, codomain[Math.floor(Math.random() * codomain.length)]]);
  
  const isFunction = Math.random() > 0.5;
  if (!isFunction) {
    pairs.push([domain[Math.floor(Math.random() * domain.length)], codomain[Math.floor(Math.random() * codomain.length)]]);
  }

  const question = `Is the following set of ordered pairs a function?\n${JSON.stringify(pairs)}`;
  const answer = isFunction ? "Yes" : "No";
  return { question, options: ["Yes", "No"], answer };
}

// Master function
export function generateFunctionDefinitionQuestion(difficulty = "Easy") {
  if (difficulty === "Easy") return generateMappingQuestion();
  if (difficulty === "Medium") return generateOrderedPairsQuestion();
  return {
    question: "Check the graph (not implemented here). Is it a function?",
    options: ["Yes", "No"],
    answer: "Yes or No"
  };
}
