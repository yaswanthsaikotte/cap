// algorithms/index.js

import { generateFunctionDefinitionQuestion }     from './functionDefinition.js';
import { generateInjectiveQuestion }              from './injective.js';
import { generateSurjectiveQuestion }             from './surjective.js';
import { generateBijectiveQuestion }              from './bijective.js';
import { generateCompositionQuestion }            from './composition.js';
import { generateInverseQuestion }                from './inverse.js';
import { generateAdditionQuestion }               from './addition.js';
import { generateSubtractionQuestion }            from './subtraction.js';
import { generateMultiplicationQuestion }         from './multiplication.js';
import { generateDivisionQuestion }               from './division.js';
import { generateEqualityQuestion }               from './equality.js';
import { generateEvenFunctionQuestion }           from './even.js';
import { generateOddFunctionQuestion }            from './odd.js';
import { generateFloorCeilingQuestion }           from './floorCeiling.js';
import { generateFactorialQuestion }              from './factorial.js';
import { generateAbsoluteValueQuestion }          from './absoluteValue.js';
import { generateLogQuestion }                    from './logarithm.js';
import { generatePartialFunctionQuestion }        from './partial.js';
import { generateIdentityQuestion }               from './identity.js';
import { generatePermutationQuestion }            from './permutation.js';
import { generateInjectiveHomomorphismQuestion }  from './injectiveHomomorphism.js';
import { generateBijectiveIsomorphismQuestion }   from './bijectiveIsomorphism.js';
import { generateModularOperationsQuestion }      from './modularOperations.js';

export const topicGenerators = {
  1:  generateFunctionDefinitionQuestion,
  2:  generateInjectiveQuestion,
  3:  generateSurjectiveQuestion,
  4:  generateBijectiveQuestion,
  5:  generateCompositionQuestion,
  6:  generateInverseQuestion,
  7:  generateAdditionQuestion,
  8:  generateSubtractionQuestion,
  9:  generateMultiplicationQuestion,
  10: generateDivisionQuestion,
  11: generateEqualityQuestion,
  12: generateEvenFunctionQuestion,
  13: generateOddFunctionQuestion,
  14: generateFloorCeilingQuestion,
  15: generateFactorialQuestion,
  16: generateAbsoluteValueQuestion,
  17: generateLogQuestion,
  18: generatePartialFunctionQuestion,
  19: generateIdentityQuestion,
  20: generatePermutationQuestion,
  21: generateInjectiveHomomorphismQuestion,
  22: generateBijectiveIsomorphismQuestion,
  23: generateModularOperationsQuestion,
};
