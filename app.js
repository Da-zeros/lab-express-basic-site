const express = require("express");
const app = express();
const port = 8008;

function cuandoArranques() {
  console.log(`Aplicacion viva y arrancada en el puerto: ${port}`);
}
app.listen(port, cuandoArranques);

app.use(express.static("public")); //todos mis elementos estaticos estan en public

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));
app.get('/photo', (request, response, next) => response.sendFile(__dirname + '/views/photo.html'));