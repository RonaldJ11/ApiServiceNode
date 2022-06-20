const express = require('express');
const app = express();
const morgan = require('morgan');

//Config
app.set('port', process.env.PORT || 3000);

//Morgan
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Test');
})

// subjects api
app.use('/api/subjects', require('./routes/subjecs'))

// students api
app.use('/api/students', require('./routes/students'))


//Start server
app.listen(app.get('port'), () => {
    console.log('Server on Port 3000');
})