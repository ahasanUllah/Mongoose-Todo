const express = require('express');
const   mongoose  = require('mongoose');
const app = express();
app.use(express.json());
const port = 3000;
const todoHandler = require('./routeHandler/todoHandler')

mongoose.set('strictQuery', false)

app.get('/', async(req, res) => {
    res.send('Hello world')
})

// detabase connection with mongose
mongoose.connect('mongodb://localhost/todos')
.then(() => {
    console.log('connection successful');
})
.catch(err => {console.log(err);})

// application route
app.use('/todo', todoHandler);

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})