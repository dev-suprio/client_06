var con = require('./connection');
var express = require('express');
var app = express();
app.use('/css',express.static('css'));
app.use('/image',express.static('image'));
app.use('/js',express.static('js'));
app.use('/public',express.static('js'));

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/',function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.post('/',function(req, res){
      var ParticipantName = req.body.ParticipantName;
      var ParticipantEmail = req.body.ParticipantEmail;
      var ParticipantMessage = req.body.ParticipantMessage;

      con.connect(function(error){
            if(error) throw error;

            var sql = "INSERT INTO userinfo(ParticipantName, ParticipantEmail, ParticipantMessage) VALUES ('"+ParticipantName+"','"+ParticipantEmail+"','"+ParticipantMessage+"')";
            con.query(sql,function(error, result){
              if(error) throw error;
              res.send('Register successfully '+result.insertId);
            });

      });



});

app.listen(5000);