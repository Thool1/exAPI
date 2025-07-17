module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const articles = [
    { id: 1, title: 'Cricket World Cup 2025 Begins', content: 'Opening match in Ahmedabad...' },
    { id: 2, title: 'ISL Final 2025', content: 'Kerala Blasters win in penalty shootout...' }
  ];
  res.status(200).json(articles);
};
