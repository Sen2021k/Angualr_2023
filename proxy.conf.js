const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(';')[0]
    : 'http://localhost:21180';

const PROXY_CONFIG = [
  {
    context: [
     
      '/api/',
      '/api/Authenticate',          
      '/swagger',
      '/lib',
      '/css',
      '/images',
      '/js',     
      '/security',
      '/api/security',     
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive',
    },
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;


//const { env } = require('process');

//const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
//  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:44472';

//const PROXY_CONFIG = [
//  {
//    context: [
//      "/weatherforecast",
//   ],
//    target: target,
//    secure: false,
//    headers: {
//      Connection: 'Keep-Alive'
//    }

//  }
//]

//module.exports = PROXY_CONFIG;
