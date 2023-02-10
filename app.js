var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');

const bodyParser = require('body-parser');
const morgan = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var putGoods = require('./routes/put_goods');

var putGoodsAPI = require('./routes/put_goods_api')
var uploadFileAPI = require('./routes/upload_file_api')
var uploadFilesAPI = require('./routes/upload_files_api')

var app = express();
var cors = require('cors')
app.use(cors())

app.use(fileUpload({
  createParentPath: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/put-goods', putGoods);

app.use('/put-goods-api', putGoodsAPI);
app.use('/upload-file', uploadFileAPI);
app.use('/upload-files', uploadFilesAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
