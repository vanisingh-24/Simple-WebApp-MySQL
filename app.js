var mysql = require('mysql');
var faker = require('faker');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'join_us'
});

app.get('/',function(req,res){
    //Find count of users in DB
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q,function(err,results){
        if(err) throw err;
        var count = results[0].count;
        res.render('home', {count: count});
    });
});

app.get('/joke',function(req,res){
    var joke = 'What do you call a dog that does magic tricks? A labracadabrador.';
    res.send(joke);
});

app.get('/random_num',function(req,res){
    var num = Math.floor((Math.random()*10)+1);
    res.send('Your lucky number is ' + num);
});



// //INSERT BULK DATA
// var data = [];
// for(var i = 0; i< 500;i++){
//     data.push([
//        faker.internet.email(),
//         faker.date.past()
//     ]);
// }

// // console.log(data);

// var q = 'INSERT INTO users (email,created_at) VALUES ?';

// connection.query(q, [data], function(err,result){
//     console.log(err);
//     console.log(result);
// });

// connection.end();


app.listen(8080,function(){
    console.log("Server running on port 8080!");
});