import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Hello Users');

  res.send([
    'Fernando',
    'Roberto',
    'Felipes',
    'Dan'
  ])
});

app.listen(3333);