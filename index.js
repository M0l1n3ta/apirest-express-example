const express = require('express');
const app = express();

var provinciasjsonFile = require("./data/provincias.json"); 

const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.get('/GetProvincias', (req, res) => {
    res.json(provinciasjsonFile);
});


app.get('/GetSuma', (req, res) => {
    let resultado = parseInt(req.query.x) + parseInt(req.query.y);
    res.json({ Resultado :  resultado });
});


app.get('/GetResta', (req, res) => {
    let resultado = parseInt(req.query.x) - parseInt(req.query.y);
    res.json({ Resultado :  resultado });
});

app.post('/DoLogin', (req, res) => {
    let user = req.body.user;
    let pass = req.body.pass;
    //hacer llamada a metodo de login con usuer y pass
    res.send("El usuario: " + user + " ha iniciado sesión");
});

app.post('/GetPVP', (req, res) => {
    res.send("El precio del articulo es: " + req.body.pvp);
});

app.post('/GetNombreID', (req, res) => {
    res.send("El articulo: " + req.body.nombre + " tiene el id: " + req.body.id);
});
    