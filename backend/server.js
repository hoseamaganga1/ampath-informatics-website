// server.js
const Hapi = require('@hapi/hapi');
require('dotenv').config();

// you can import your routes here
// For example, if you have a file named example.routes.js in the routes directory
const exampleRoutes = require('./routes/example.routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: 'localhost'
  });

  server.route(exampleRoutes);

  await server.start();
  console.log(`🚀 Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
