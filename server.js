// on veut créer un générateur d'objet sous la forme objet = [{objet1}, {objet2}, {objet3}]. Ce générateur prendra en clé des valeurs aléatoire et prendra en valeurs, des valeurs aléatoire.

const express = require('express');
const app = express()
const PORT = 3000

const router = require('./app/routes.js')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/static'));

app.use(router);


app.listen(PORT, console.log(`server ok at http://localhost:${PORT}`))