var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var passport = require("passport");
var session = require("express-session");
var flash = require("connect-flash");

// Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecotrip');

// Routes
var index = require('./routes/index');
var api = require('./routes/api');
var auth = require('./routes/auth');
<<<<<<< HEAD
var admin = require('./routes/admin');
=======
var api=  require('./routes/api');
>>>>>>> af88a7dfedba96c6fb395c28ee84df30bc8809f0

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

app.use('/', index);
app.use('/auth', auth);
<<<<<<< HEAD
app.use('/api', api);
app.use('/admin', admin);

=======
//app.use('/users', users);
app.use('/api',api);
>>>>>>> af88a7dfedba96c6fb395c28ee84df30bc8809f0
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
