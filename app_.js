const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fs = require("fs");
var cors = require('cors')

var sampleObject = {
    a: 1,
    b: 2,
    c: {
        x: 11,
        y: 22
    }
};



// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'austin'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Create DB
app.get('/walletID/:uuid/:accessToken', (req, res) => {
  var data = JSON.stringify(false);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(JSON.parse(this.responseText));
      var result = JSON.parse(this.responseText);
      var result_array = result.result;
      console.log('****')
      var result_dic = result_array[0];
      var data_array = result_dic.data;
      var data_dic = data_array[0];
      console.log(data_dic.wallet_id);

      fs.writeFile("text.json", JSON.stringify({walletID: data_dic.wallet_id}), (err) => {
        if (err) {
          console.error(err);
          return;
        };
        console.log("File has been created");
      });
    }
  });
  var at_string = "Bearer " + req.params.accessToken;
  xhr.open("GET", "https://wallet-api.digitaltown.com/api/v1/wallets?userID=" + req.params.uuid);
  xhr.setRequestHeader("authorization", at_string);

  xhr.send(data);

  // res.send("Test");
});

app.get('/password/:email', (req, res) => {
  console.log(req.params.email)
  let sql = `SELECT * FROM users WHERE email = ${req.params.email}`;
  let query = db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      var objToJson = results;
      var response = [];
      console.log(results.length)
      for (var key in results) {
        response.push(results[key]);
        console.log(results[key].password);
        console.log('***')
      }
      objToJson.response = response;
      var test = objToJson.response;
      console.log(test);
      var finalresponse = JSON.stringify(objToJson);
      res.send('Posts fetched...');
      fs.writeFile("password.json", JSON.stringify({password: results[key].password}), (err) => {
        if (err) {
          console.error(err);
          return;
        };
        console.log("File has been created");
      });
  });


});

// Create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

app.get('/adduser/:first_name/:last_name/:email/:password/:uuid/:wallet_id/:payment_pin/:access_token', (req, res) => {

    let post = {first_name:req.params.first_name, last_name:req.params.last_name, email:req.params.email, password:req.params.password, uuid:req.params.uuid, wallet_id:req.params.wallet_id, payment_pin:req.params.payment_pin, access_token:req.params.access_token};
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.get('/addpost2', (req, res) => {
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});

// Select single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
