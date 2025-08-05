    // create a hapi route that is imported as const exampleRoutes = require('./routes/example.routes');
    
    const exampleRoutes = [
      {
        method: 'GET',
        path: '/example',
        handler: (request, h) => {
            console.log(request.body);
          return { message: 'Example route working!' };
        }
      }
    ];
    
    module.exports = exampleRoutes;

    
