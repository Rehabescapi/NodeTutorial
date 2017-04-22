import express from 'express';

import path from'path';
import open from 'open' ;
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const  port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.get('/users', function(req, res){
res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith" , "email": "Bob@gmail.com"},
      {"id": 2, "firstName": "Jane", "lastName": "Jones" , "email": "JJ@gmail.com"},
        {"id": 3, "firstName": "Tina", "lastName": "To" , "email": "Tb@gmail.com"},
]);
});


app.listen(port , function(err) {
    if(err){
        console.log(err);
    } else{
        open('http://localhost:' + port);
    }
});