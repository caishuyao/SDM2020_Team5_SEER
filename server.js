const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/article', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/user', (req, res) => {
  console.log(req.body);
  res.send(
    [
    ["1", "Dakota Rice", "Applying TDD in agile development ", "1203"],
    ["2", "Dakota Rice", "Applying TDD in agile development ", "500"],
    ["3", "Dakota Rice", "Applying TDD in agile development ", "400"],
    ["4", "Dakota Rice", "Applying TDD in agile development ", "399"],
    ["5", "Minerva Hooper", "Applying TDD in agile development", "370"],
  ]
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
