const { mongoURL } = require('./config/config');
const express = require('express');
const { Server } = require('socket.io');
const { connectionSocket } = require('./utils/soket.io');
const handlebars = require('express-handlebars');
const router = require('./routes/index.router');
const server = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store');
const mongoconnect = require('connect-mongo');
const mongoose = require('mongoose');
const productModel = require('./dao/models/products.model');
const { PORT } = require('./utils/constants');
const { init } = require('./dao/models/users.model');
const { initPassaport } = require('./utils/passport.config');
const passport = require('passport');
const errorList = require('./middlewares/errors');
const { mdwlLogger } = require('./config/winston');
const { faker } = require('@faker-js/faker');
mongoose.set('strictQuery', false);
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const cors = require('cors');

const FileStorage = FileStore(session);
const httpServer = server.listen(8080, () => { });

// Documentacion Swagger
// server.use(cors());

const config = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      description: 'API Eccomerce',
    },
  },
  apis: [`${__dirname}/docs/**/*yml`],
};

const spec = swaggerJsDoc(config);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

//handlerbars
server.engine('handlebars', handlebars.engine());
server.set('views', __dirname + '/views');
server.set('view engine', 'handlebars');

//cokiers
server.use(cookieParser());

//express
server.use(express.static(__dirname + '/public'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
  session({
    store: mongoconnect.create({
      mongoUrl: mongoURL,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 60 * 60,
    }),
    secret: 'secretCode',
    resave: true,
    saveUninitialized: true,
  })
);

// server.use(mdwlLogger);
server.use(errorList);
initPassaport();
server.use(passport.initialize());
server.use(passport.session());
// Middlewares de logger
server.use(mdwlLogger);

//rutas

server.use('/', router);


const test = async () => {
  await mongoose.connect("mongodb+srv://root:uhxZm0JJ5P6Iy90Y@cluster0.kejfql2.mongodb.net/test?retryWrites=true&w=majority");
  console.log('Su conexion a la base fue exitosa');
};

test();
connectionSocket(httpServer);