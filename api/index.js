const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const articles = [
  { id: 1, title: 'Cricket World Cup 2025 Begins', content: 'Opening match in Ahmedabad...' },
  { id: 2, title: 'ISL Final 2025', content: 'Kerala Blasters win in penalty shootout...' }
];

module.exports = app.get('/api/articles', (req, res) => {
  res.json(articles);
});
