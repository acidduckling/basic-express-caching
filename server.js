const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(cors());
app.use(compression());

// Serve the public folder as the /static route
app.use('/static', express.static(path.join(__dirname, 'public'), { maxAge: '2h' }));

app.get('/hi', (req, res) => {
  res.header('Cache-Control', 'public, max-age=86400');
  res.header('Content-Type', 'text/html');
  res.send(new Buffer('<h2>Test string</h2>'));
});

app.listen(3000, () => console.log('Example app listening on port 3000'));
