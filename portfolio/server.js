#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
var app = express();

app.use(express.static(process.env.OPENSHIFT_NODEJS_REPO_DIR+ '/'));

app.get('/',function(req,res){
	res.sendfile("index.html");
});


app.get('/controllers/layoutController.js',function(req,res){
	res.sendfile("controllers/layoutController.js");
});

app.get('/controllers/homeController.js',function(req,res){
	res.sendfile("controllers/homeController.js");
});

app.get('/static/animate.css',function(req,res){
	res.sendfile("static/animate.css");
});

app.get('/views/main.html',function(req,res){
	res.sendfile("views/main.html");
});

app.get('/views/projects.html',function(req,res){
	res.sendfile("views/projects.html");
});

app.get('/views/footer.html',function(req,res){
	res.sendfile("views/footer.html");
});

app.get('/views/resume.html',function(req,res){
	res.sendfile("views/resume.html");
});

app.get('/static/JamesSpring15.pdf',function(req,res){
	res.sendfile("static/JamesSpring15.pdf");
});

app.get('/static/img/swift.jpg',function(req,res){
	res.sendfile("static/img/swift.jpg");
});

app.get('/static/img/copter.jpg',function(req,res){
	res.sendfile("static/img/copter.jpg");
});

app.get('/static/img/drupal.jpg',function(req,res){
	res.sendfile("static/img/drupal.jpg");
});

app.get('/static/img/drupal2.jpg',function(req,res){
	res.sendfile("static/img/drupal2.jpg");
});

app.get('/static/img/jamesritter.jpg',function(req,res){
	res.sendfile("static/img/jamesritter.jpg");
});

app.get('/static/img/powershell.jpg',function(req,res){
	res.sendfile("static/img/powershell.jpg");
});

app.get('/static/img/riot.jpg',function(req,res){
	res.sendfile("static/img/riot.jpg");
});

app.get('/static/img/Ti.png',function(req,res){
	res.sendfile("static/img/Ti.png");
});

app.get('/static',function(req,res){
	res.sendfile("static/");
});


app.post('submit.php',function(req,res){
	//res.sendfile("submit.php");
});


app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || '8080');


app.listen(app.get('port'), app.get('ip'),function(){
	console.log("Express server listening on port " + app.get('port') + "and ip  "+app.get('ip'))
});