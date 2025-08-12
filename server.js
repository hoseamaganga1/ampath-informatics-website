// server.js
const Hapi = require('@hapi/hapi');
const { sequelize } = require("./models");
require('dotenv').config();

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const inviteRoutes = require('./routes/inviteRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const systemRoutes = require('./routes/systemRoutes');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const teamRoutes = require('./routes/teamRoutes');
const adminRegisterRoutes = require('./routes/adminRegisterRoutes');
const newsUpdateRoutes = require('./routes/newsUpdateRoutes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Allow all origins (change to your frontend URL in production)
        headers: ['Accept', 'Content-Type', 'Authorization'],
        additionalHeaders: ['X-Requested-With'],
        credentials: true
      }
    }
  });

  // Register JWT authentication strategy
  await server.register(require('@hapi/jwt'));

  server.auth.strategy('jwt', 'jwt', {
    keys: process.env.JWT_SECRET,
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

  // Sync DB
  await sequelize.sync({ alter: true });
  console.log('Database synced');

  // Register routes
  server.route(adminRoutes);
  server.route(inviteRoutes);
  server.route(contactRoutes);
  server.route(projectRoutes);
  server.route(resourceRoutes);
  server.route(systemRoutes);
  server.route(teamRoutes);
  server.route(adminRegisterRoutes);
  server.route(newsUpdateRoutes);


  await server.start();
  console.log(`🚀 Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
