// var express = require('express')
// var app = express()
// var path = require('path')

// app.use(express.static(path.join(__dirname, 'public')))


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// })

// app.get('/contact', function (req, res) {
// res.sendFile(path.join(__dirname + '/contact.html'));
// })


// app.get('/about', function (req, res) {
// res.sendFile(path.join(__dirname + '/about.html'));
// });



// app.listen(3000, function(){
//     console.log("hello me ")
// });


// app.get("handlebars")





//  {
//     res.send("hello judescript")
// }


// app.get("/", function (req, res){
//     res.send("hello judescript")
// })
//  basiccaly this means if somone is contacting us
// execute this function.

// app.get("/jesco", function (req,res) {
//     res.send(path.join(__dirname+ ('/index.html')
// })



//     app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public'/index.html');
//    })


// app.get("/home", function (req,res) {
//     res.send("jescoscript is cool")
// })

// app.get("/jesco", function (req,res) {
//     res.send("jescoscript is cool")
// })

// app.get("/comtact", function (req,res) {
//     res.send("contact")
// })

// app.get("/ironhack", function (req,res) {
//     res.send("jurgen")
// })




var express = require('express')
var app = express()
var path = require("path")

var hbs = require("hbs")
hbs.registerPartials(__dirname + '/views/partials');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get("/", function(req,res){
    res.render("index", {name: "Jude"})
})

app.get("/contact", function(req,res){
    res.render("about", {name: "Jude"})
})

app.get("/about", function(req,res){
    res.render("about", {name: "louis"})
})


app.get("/history", function(req,res){
    res.render("history", {name: "kevin"})
})
    



// app.get("/reusedcomponents", function(req,res){
//     res.render("reusedcomponents")
// })

// app.get("/anyRoute", function(req,res){
//     res.render("someTemplate", {name: "charlie"})
// })





app.listen(3000, function() {
    console.log("updated? listening")
})
