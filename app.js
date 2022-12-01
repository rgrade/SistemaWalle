var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const agendaDao=require("./database/dao/agenda-dao");
const denunciaDao=require("./database/dao/denuncia-dao");
const locaisDao=require("./database/dao/locais-dao");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { ID } = require('webpack/lib/ModuleFilenameHelpers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post("/agendar/salvar", async function (req, res) {
  console.log("Salvando Registro")
  try {
    const retorno = await agendaDao.gravarAgenda({
      nome: req.body.nome,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
      data: req.body.data,
      hora: req.body.hora,
      equipamentos: req.body.equipamentos,
      observacao: req.body.observacao,
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201);
      //res.render('agendar');
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
});

app.post("/denunciar/salvar", async function (req, res) {
  try {
    const retorno = await denunciaDao.gravarDenuncia({
      titulo: req.body.titulo,
      local: req.body.local,
      email: req.body.email,
      mensagem: req.body.mensagem,
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201);
      res.render('denuncias');
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
});

app.post("/locais/salvar", async function (req, res) {
  try {
    const retorno = await locaisDao.gravarLocal({
      identificador: req.body.identificador,
      endereco: req.body.endereco,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201);
      res.render('locais');
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
});

app.get("/denunciar/listar", async function (req, res) {
  const dados = await denunciaDao.buscaDenuncias();
  console.log(dados);
  res.status(200).send(dados);
});

app.get("/locais/listar", async function (req, res) {
  const dados = await locaisDao.buscaLocais();
  console.log(dados);
  res.status(200).send(dados);
  let lista = document.getElementById('listaLocais');
  for(var i = 0; i < dados.ID.length; i++){
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(dados.identificador[i]))
    lista.appendChild(item);
  }
});

const nodemailer = require('nodemailer');
app.get("/send-email", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "34865396c569a5",
      pass: "0232e4bd67a956"
    }
  });
  var message = {
    from: "grade.rafael@gmail.com",
    to: "rafaelgrade@sou.faccat.br",
    subject: "Denuncia - Sistema Walle",
    text: "Recebemos a sua denuncia",
  };

  transport.sendMail(message);
  res.render('denuncias');
});

module.exports = app;