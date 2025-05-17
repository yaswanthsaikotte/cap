import request from 'supertest';
import { createServer } from '../auto-question-api/graphql-backend/index.js'; // Import the GraphQL server
import { fetchQuestions } from '../auto-question-api/server.mjs'; // Import the client function

let server;

beforeAll(() => {
  server = createServer(); // Start the GraphQL server
});

afterAll(() => {
  server.close(); // Close the server after tests
});

describe('GraphQL API Tests', () => {
  test('Fetch questions for Topic ID 2 (Set Operations) with easy difficulty', async () => {
    const query = `
      query {
        generateQuestions(topicId: 2, difficulty: "easy", count: 1) {
          question
          options
          answer
        }
      }
    `;

    const response = await request(server)
      .post('/graphql')
      .send({ query })
      .expect(200);

    const { data } = response.body;
    expect(data.generateQuestions).toHaveLength(1);
    expect(data.generateQuestions[0]).toMatchObject({
      question: expect.any(String),
      options: expect.any(Array),
      answer: expect.any(String),
    });
  });

  test('Fetch questions for advanced difficulty (Power Set)', async () => {
    const query = `
      query {
        generateQuestions(topicId: 3, difficulty: "advanced", count: 1) {
          question
          answer
        }
      }
    `;

    const response = await request(server)
      .post('/graphql')
      .send({ query })
      .expect(200);

    const { data } = response.body;
    expect(data.generateQuestions).toHaveLength(1);
    expect(data.generateQuestions[0]).toMatchObject({
      question: expect.stringContaining('Power set'),
      answer: expect.stringContaining('True'),
    });
  });
});

describe('Client API Tests', () => {
  test('Client fetches questions for Topic ID 2 (Set Operations)', async () => {
    const topicId = 2;
    const difficulty = 'easy';
    const count = 1;

    const questions = await fetchQuestions(topicId, difficulty, count);
    expect(questions).toHaveLength(1);
    expect(questions[0]).toMatchObject({
      question: expect.any(String),
      options: expect.any(Array),
      answer: expect.any(String),
    });
  });

  test('Client fetches advanced questions (Power Set)', async () => {
    const topicId = 3;
    const difficulty = 'advanced';
    const count = 1;

    const questions = await fetchQuestions(topicId, difficulty, count);
    expect(questions).toHaveLength(1);
    expect(questions[0]).toMatchObject({
      question: expect.stringContaining('Power set'),
      answer: expect.stringContaining('True'),
    });
  });
});