// index.js

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import { topicGenerators } from './algorithms/index.js'; // ✅ ES module import

// Define GraphQL Question Type
const QuestionType = new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    question: { type: GraphQLString },
    options: { type: new GraphQLList(GraphQLString) },
    answer: { type: GraphQLString },
  }),
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    generateMultipleQuestions: {
      type: new GraphQLList(QuestionType),
      args: {
        topicId: { type: new GraphQLNonNull(GraphQLInt) },
        difficulty: { type: new GraphQLNonNull(GraphQLString) },
        count: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const { topicId, difficulty, count } = args;
        const generator = topicGenerators[topicId];

        if (!generator) {
          throw new Error(`No generator found for topicId: ${topicId}`);
        }

        const questions = [];
        for (let i = 0; i < count; i++) {
          questions.push(generator(difficulty));
        }

        return questions;
      },
    },
  }),
});

// Define GraphQL Schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

// Initialize Express App
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(8000, () => {
  console.log('🚀 GraphQL server running at http://localhost:8000/graphql');
});
