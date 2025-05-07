const http = require('http');

// Define routes
const routes = {
  '/saludo': (res) => {
    res.end('Hola Grupo de Diseno y desarrollo de APIs.\n');
  },
  '/hora': (res) => {
    const now = new Date();
    res.end(`La hora actual es: ${now.toLocaleTimeString()}\n`);
  },
  '/': (res) => {
    res.end('hola mundo\n');
  }
};

const server = http.createServer((req, res) => {
  const url = req.url;
  
  const handler = routes[url] || routes['/'];
  handler(res);
});

const port = 3004;
server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
}); 