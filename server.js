const app = require('express')();
const port = 3001;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => console.log(`running on port ${port}`));
