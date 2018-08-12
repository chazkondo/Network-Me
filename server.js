const express = require('express');
const handlebars = require('express-handlebars');

const PORT = process.env.PORT || 4020;
const server = express();

server.use(express.static('./public'));

server.get('/', (req, res) => {
  res.render('pages/home')
});

server.engine('.hbs', handlebars({
  defaultLayout: 'index',
  extname: '.hbs'
}));

server.set('view engine', '.hbs');

// GET
server.get('/', (req, res) => {
  res.render('pages/home')
});

server.get('/login', (req, res)=>{
  res.render('pages/login')
});

server.get('/register', (req, res)=>{
  res.render('pages/register');
});

// POST
// server.post('/login')

// CATCH ALL
server.get('*', (req, res) => {
  res.send('Bad URL.');
});

server.listen(PORT, () => {
  console.log(`Connected to ${PORT}`)
});