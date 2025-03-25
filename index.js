import corsAnywhere from 'cors-anywhere';

// Get the port and host from environment variables (Vercel sets the `PORT` dynamically)
const port = process.env.PORT || 3000;
const host = '0.0.0.0'; // Use this for the Vercel serverless environment

// Set up the CORS Anywhere server
const server = corsAnywhere.createServer({
  originBlacklist: [], // List of blacklisted origins (empty to allow all)
  originWhitelist: [], // List of whitelisted origins (empty to allow all)
  requireHeaders: ['origin', 'x-requested-with'],
  removeHeaders: [
    'cookie',
    'cookie2',
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
  ],
  redirectSameOrigin: true,
  httpProxyOptions: {
    xfwd: false, // Disable X-Forwarded headers since Vercel adds them
  },
});

// Vercel automatically handles serverless functions, so listen on the dynamic port
server.listen(port, host, () => {
  console.log(`CORS Anywhere running on ${host}:${port}`);
});

