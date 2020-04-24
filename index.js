var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var login = require('./server/test');


var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.set('view engine', 'ejs'); 

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	
	response.send("Hello world");
});
app.get('/home', function(req, res) {
	res.sendfile(path.join(__dirname,'./views/patient_home.html'));
});
app.get('/nursehome', function(req, res) {
	res.sendfile(path.join(__dirname,'./views/nurse_home.html'));
});

app.get('/auth',function(req,res) {
	res.sendFile(path.join(__dirname,'./views/patient_login_signup.html'));
});
app.post('/auth', login.auth);
app.get('/employeeauth',function(req,res){
	res.sendFile(path.join(__dirname,'./views/employee_login.html'));
app.get('/dhome',function(req,res){
	res.sendFile(path.join(__dirname,'./views/doctor_home.html'));
});

});
app.post('/employeeauth',login.employeeauth,function(req,res){

});
app.get('/logout', function(req, res){
    req.session.destroy(function(){
       console.log("user logged out.")
    });
    res.redirect('/auth');
 });


app.post('/register',login.register);


app.get('/dappointment',login.dappointment);
app.post('/dappointment',login.cancel);

app.get('/employeeprescription',login.employeeprescription);
app.post('/employeeprescription',login.submitprescription);

app.get('/notes',login.notes);
app.post('/notes',login.updatenotes);

app.get('/appointment',login.appointment);
app.post('/appointment',login.scheduleappointment);

app.get('/history',login.history);
app.get('/location',login.location);

app.get('/patientprescription',login.patientprescription);
app.post('/report1',login.report1);

app.get('/report',function(req,res) {
	res.render('reports');
});

app.get('/accountsetting',function(req,res){
	res.sendFile(path.join(__dirname,'./views/patient_account_settings.html'));

});
app.post('/accountsetting',login.accountsetting);

app.get('/newpatient',function(req,res){
	res.render('newpatient_appointment');
});


app.get('/employeeaccountsetting',function(req,res){
	res.sendfile(path.join(__dirname,'./views/employee_account_settings.html'));
});
app.post('/employeeaccountsetting',login.employeeaccountsetting);
app.listen(3000);


