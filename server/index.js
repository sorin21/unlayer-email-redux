const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const publicPath = path.join(__dirname, "..", "dist");
// Point static path to dist
app.use(express.static(publicPath));

// const routes = require('../routes/index');
// app.use("/", routes);
// send all unmach routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})
/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`))