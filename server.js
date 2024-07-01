const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

//HANDLEBARS
app.engine('.hbs', hbs.engine());
app.set('view engine', '.hbs');

//MIDDLEWARES

app.use(express.static(path.join(__dirname, '/public')));

//ENDPOINTS

app.get('/', (req, res) => {
  res.render('home', {layout: false});
});

app.get('/home', (req, res) => {
  res.render('home', {layout: false});
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});


app.get('/about', (req, res) => {
  res.render('about', {layout: false});
});

app.get('/user/*', (req, res) => {
  res.render('forbidden', {layout: false});
});

//ERROR HANDLING

app.use((req, res) => {
  res.render('404', {layout: false});
})


//LISTENING


app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });