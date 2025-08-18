// server.js

const Hapi = require('@hapi/hapi');
const {sequelize}=require("./models");
require('dotenv').config();

// you can import your routes here
// For example, if you have a file named example.routes.js in the routes directory
const adminRoutes = require('./routes/adminRoutes');
const inviteRoutes =require('./routes/inviteRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const sectionContentRoutes = require('./routes/sectionContentRoutes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: 'localhost'
  });

    // Register JWT authentication strategy
  await server.register(require('@hapi/jwt'));

  server.auth.strategy('jwt', 'jwt', {
    keys: process.env.JWT_SECRET ,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      nbf: true,
      exp: true
    },
    validate: async (artifacts, request, h) => {
      return {
        isValid: true,
        credentials: {
          id: artifacts.decoded.payload.id,
          role: artifacts.decoded.payload.role
        }
      };
    }
  });

  server.auth.default('jwt');

    await sequelize.sync({ alter: true });
  console.log('Database synced');


 server.route(adminRoutes);
 server.route(inviteRoutes);
 server.route(sectionRoutes);
server.route(sectionContentRoutes);


  await server.start();
  console.log(`🚀 Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
