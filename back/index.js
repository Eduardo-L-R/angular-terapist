const express = require("express");
const bodyParser = require("body-parser");
const mongooseDriver = require("mongoose")
const cors = require("cors");
const http = require('http');
const dotenv = require('dotenv');
const fs = require("fs");
const router = express.Router();
const { signin } = require('./controllers/users');
const routes = require('./routes/routes.js');
const usersModel = require('./models/users');
const jwt = require("jsonwebtoken");
dotenv.config({ path: './.env' });
const app = express();
const port = process.env.PORT || 5000;

// const { nextTick } = require("process");

// app.use((req, res, next) => {
//   var datetime = new Date();
//   console.log(`Ip: ${req.headers["x-real-ip"] || req.ip.split(':')[req.ip.split(':').length - 1] || req.ips[0] || req.header('x-forwarded-for')} Method: ${req.method} Url: ${req.url} Time: ${datetime}`);
//   fs.appendFile('log.txt', `Ip: '${req.headers["x-real-ip"] || req.ip.split(':')[req.ip.split(':').length - 1] || req.ips[0] || req.header('x-forwarded-for')}' Method: '${req.method}' Url: '${req.url}' Time: '${datetime}',\n`,
//     (err) => { if (err) throw err; console.log('Log actualizado! \n'); });
//   next();
// });

app.use(cors(
  // {
  //   "origin": "*",
  //   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   "preflightContinue": false,
  //   "optionsSuccessStatus": 204
  // }
));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Configurar cabeceras y cors
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   // res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });


app.use(bodyParser.json());

app.use( (req,res,next)=>{
  // console.log(req.headers);
  // console.log(req.body);
  next();
}
)

app.post('/login', signin);

app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }else if(req.headers.authorization){
    let verify = jwt.verify(req.headers.authorization.split(" ")[1], 'fisioterapia');
    console.log(verify);
    usersModel.find({username: verify.username}).sort({ username: 1 })
    .then(userDoc => {
      if(userDoc[0].password === verify.password){
        console.log({access:"ok", type: "token"})
        next();
      }else{
        res.json({access:"denied"});
        console.log({access:"denied", type: "token"})
      }
    })
    .catch(error => {
      res.json("error");
      console.log({access:"error", type: "token"})
    }
    );
  }else{
    res.status(400).json({ error: 'Something occurr' })
  }
});


app.use('/', routes);

// mongooseDriver.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.y2unn.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
mongooseDriver.connect(`mongodb://localhost:27017/${process.env.DATABASE}?readPreference=primary&appname=MongoDB%20Compass&ssl=false`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Conexión con la base de datos establecida");
  app.listen(port, () => { console.log(`Escuchando sobre el puerto ${port}`); });
  http.get('http://bot.whatismyipaddress.com', (res) => {
    res.setEncoding('utf8');
    res.on('data', (publicIpAdress) => {
      console.log('you public address is:', `${publicIpAdress}:${port} \n`);
    });
  });
}).catch(error => {
  console.log(error);
});
