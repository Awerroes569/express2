const express = require('express');
const path = require('path');

const app = express();

//MIDDLEWARES

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

//ENDPOINTS

app.get('/', (req, res) => {
    res.show('home.html');
});

app.get('/home', (req, res) => {
res.show('home.html');
});

app.get('/hello/:name', (req, res) => {
res.send(`Hello, ${req.params.name}`);
});


app.get('/about', (req, res) => {
    res.show('about.html');
  });
  
app.get('/about', (req, res) => {
    res.show('about.html');
  });

app.get('/user/*', (req, res) => {
    res.show('forbidden.html');
  });

//ERROR HANDLING

app.use((req, res) => {
res.status(404).send('404 not found...');
})


//LISTENING


app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });