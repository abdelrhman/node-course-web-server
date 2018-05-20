const express = require('express');
const hbs = require('hbs');

var app = new express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(now);
  next();
  // res.render('about.hbs', {
  //   title: 'this is page title',
  //   year: new Date().getFullYear()
  // });
});

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    title: 'this is home title',
    year: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'this is page title',
    year: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    message: 'error '
  });
});

app.listen(port);
