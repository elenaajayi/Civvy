const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock data
const ISSUES = ['Housing', 'Transit', 'Climate', 'Healthcare', 'Education'];

const CANDIDATES = {
  housing: [
    { id: 1, name: "Candidate 1" },
    { id: 2, name: "Candidate 2" }
  ],
  transit: [
    { id: 3, name: "Candidate 3" },
    { id: 4, name: "Candidate 4" }
  ],
  climate: [
    { id: 5, name: "Candidate 5" },
    { id: 6, name: "Candidate 6" }
  ],
  healthcare: [
    { id: 7, name: "Candidate 7" },
    { id: 8, name: "Candidate 8" }
  ],
  education: [
    { id: 9, name: "Candidate 9" },
    { id: 10, name: "Candidate 10" }
  ]
};

// Store questions in memory (in production, use a database)
const questions = [];
let nextQuestionId = 1;

// Routes
app.get("/issues", (_, res) => {
  res.json(ISSUES);
});

app.get("/candidates", (req, res) => {
  const issue = req.query.issue;
  if (!issue) {
    res.status(400).json({ error: "Issue parameter is required" });
    return;
  }

  const issueKey = issue.toLowerCase();
  const candidates = CANDIDATES[issueKey];
  
  if (candidates) {
    res.json(candidates);
  } else {
    res.status(404).json({ error: "Issue not found" });
  }
});

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.post('/questions', (req, res) => {
  try {
    const { candidateId, candidateName, question } = req.body;
    
    if (!candidateId || !candidateName || !question) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newQuestion = {
      id: nextQuestionId++,
      candidateId,
      candidateName,
      question,
      timestamp: new Date().toISOString(),
    };

    questions.push(newQuestion);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Endpoints:");
  console.log("  POST /questions - Submit a question");
  console.log("  GET  /questions - Get all questions");
  console.log("  GET /issues - Get all issues");
  console.log("  GET /candidates - Get candidates by issue");
});
