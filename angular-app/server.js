const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 80;
const distPath = path.join(__dirname, 'dist', 'angular-app');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Angular escuchando en http://localhost:${port}`);
});