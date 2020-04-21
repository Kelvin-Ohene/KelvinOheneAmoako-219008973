const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';






app.set('view engine', 'ejs');
app.use(express.static(__dirname + `/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/route', require('./route/routes'))

app.post('/upload', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db("employeedb");
        dbo.collection("todo").insertOne(

            {

                Actor: req.body.Actor,
                Todo1: req.body.Todo1,
                Todo2: req.body.Todo2,
                Todo3: req.body.Todo3,
                Todo4: req.body.Todo4,
                Todo5: req.body.Todo5,
                Todo6: req.body.Todo6,
                Todo6: req.body.Todo7,
                Todo6: req.body.Todo8,
                Todo6: req.body.Todo9,
                Todo6: req.body.Todo10

            },
            function(err, result) {
                if (err) throw err;
                res.redirect('/')
                    //res.json(result);
                db.close();
            });
    })
});



const Employeesss = [{
        'name': 'Kelvin Bruce',
        'position': 'IT Department',
        'image': '/images/xx.jpg',
        'rr': 'Request for to-do list',
        'gender': 'Male',
        'age': '24',
        'year': '2018',
        'link': '/inputTODO'
    },

    {
        'name': 'Kingsley Amponsah',
        'position': 'Sales Manager',
        'image': '/images/xy.jpg',
        'rr': 'Request for to-do list',
        'gender': 'Male',
        'age': '26',
        'year': '2018'
    },

    {
        'name': 'Jackie Bong',
        'position': 'CEO',
        'image': '/images/xxx.jpg',
        'rr': 'Request for to-do list',
        'gender': 'Female',
        'age': '23',
        'year': '2017'
    },

    {
        'name': 'Kofi Mole',
        'position': 'Sales Merchant',
        'image': '/images/xyy.jpg',
        'rr': 'Request for to-do list',
        'gender': 'Male',
        'age': '28',
        'year': '2019'
    },

    {
        'name': 'Elvis Black',
        'position': 'Sales Merchant',
        'image': '/images/yyy.jpg',
        'rr': 'Request for to-do list',
        'gender': 'Male',
        'age': '25',
        'year': '2016'
    },

    {
        'name': 'Justice Anan',
        'position': 'Administrator',
        'image': '/images/yy.jfif',
        'rr': 'Submit to-do list',
        'gender': 'Male',
        'age': '26',
        'year': '2018'
    },

]

app.get('/', (req, res) => {
    res.render("employeeList", {
        Employeesss
    })
});


app.get('/todoList', (req, res) => {
    res.render("todoList", {
        Employeesss
    })
});
app.get('/inputTODO', (req, res) => {
    res.render("inputTODO", {
        Employeesss
    })
});

app.listen(8500, function() {
    console.log("active on port 8500")
});