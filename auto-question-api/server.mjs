import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(express.static('public')); // serve your HTML in /public

// Helper to fetch fresh questions from GraphQL
async function fetchQuestionsFromGraphQL() {
  const QUESTIONS_QUERY = `
    {
      generateMultipleQuestions(topicId: 20, difficulty: "hard", count: 5) {
        question
        options
        answer
      }
    }
  `;
  const resp = await fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: QUESTIONS_QUERY }),
  });
  const { data } = await resp.json();
  return data.generateMultipleQuestions;
}

// GET /api/questions always regenerates on demand
app.get('/api/questions', async (_req, res) => {
  try {
    const questions = await fetchQuestionsFromGraphQL();
    res.json(questions);
  } catch (err) {
    console.error('GraphQL query failed:', err);
    res.status(500).json({ error: 'GraphQL query failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
