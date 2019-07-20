const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const controllers = require("./controllers/messages_controller");

app.post('/api/messages', controllers.create);
app.get('/api/messages', controllers.read);
app.put('/api/messages/:id', controllers.update);
app.delete('/api/messages/:id', controllers.delete);

app.listen(3001, () => {
    console.log('App is listening on port 3001')
});