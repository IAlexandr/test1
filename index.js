const express = require('express');
const http = require('http');

const app = express();
app.get('/test', (req, res) => res.json({test: 'ok'}));

const PORT = process.env['PORT'] || 5000;
const httpServer = http.Server(app);
httpServer.listen(PORT);
console.log(`listening ${PORT}`);
