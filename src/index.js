const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const path = require('path');


mongoose.connect('mongodb+srv://admin:qweasd123@cluster0-9madl.mongodb.net/omni10?retryWrites=true&w=majority',
{ useNewUrlParser: true 
 ,useUnifiedTopology: true 
})

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);




app.listen(3333);