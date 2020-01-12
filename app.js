var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexrouter = require('./routes/index');
var logoutrouter = require('./routes/logout');
var singinrouter = require('./routes/singin');
var singuprouter = require('./routes/singup');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'lalala',
    resave: false,
    saveUninitialized: true,
    cookie: {
        name: 'testeNome',
        secure: 'auto',
        maxAge: new Date(Date.now() + (3600000))
    }
}));

app.use((req, res, next) => {
    next();
});

app.use('/', indexrouter);
app.use('/logout', logoutrouter);
app.use('/singin', singinrouter);
app.use('/singup', singuprouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;