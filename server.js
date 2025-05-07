const http = require('http');

const routes = {
  '/saludo': (res) => {
    res.end('Hola Grupo de Diseno y desarrollo de APIs.\n');
  },
  '/hora': (res) => {
    const now = new Date();
    res.end(`La hora actual es: ${now.toLocaleTimeString()}\n`);
  },
  '/': (res) => {
    res.end('20235722-Melissa Torres\n' +
      '20235760-Diego Cabezas\n' +
      '20235918-Julio Contreras\n' +
      '20235787-Christian Sanchez\n'
    );
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