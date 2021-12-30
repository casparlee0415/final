import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import path from 'path';
import engine from 'ejs-locals';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import usersRoutes from './routes/routers.js';
import morgan from 'morgan';
import fetch from "node-fetch";
import _ from 'lodash';

const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
app.use(fileUpload({
  createParentPath: true
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());





app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
/*app.use(function(req, res, next) {
  Object.defineProperty(req, 'ip', {
      get: function() { return this.headers['x-iisnode-REMOTE_ADDR']; }
  });
  next();
});*/
app.use("/", usersRoutes);

var port = process.env.PORT||3000;

app.listen(port);

export var db = mysql.createConnection({
  host: process.env.MYSQL_HOST||'localhost',
  port: process.env.MYSQL_PORT||'3306',
  user: process.env.MYSQL_USER||'root',
  password: process.env.MYSQL_PASSWORD||'123456',
  database: process.env.MYSQL_DATABASE||'scooterdb'
})

//// Connect to MySQL
db.connect(err => {
  if(err){
      throw err;
  }
  console.log('MySQL connected');
})