const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path : "./config.env"});
const port = process.env.PORT || 5000;

app.use(express.json());

// use middleware
app.use(cors({
    origin:'*',
    methods: ['GET','POST','DELETE']
}));

    //middleware
    app.use(cors({
        origin:'*',
        methods: ['GET','POST','DELETE']
    }));

    app.use(function (req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET, HEAD, OPTIONS, POST, PUT, DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        next();
    });
    
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.use(cors({
        origin:'*',
        methods: ['GET','POST','DELETE']
    }));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });


    app.use(function (req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET, HEAD, OPTIONS, POST, PUT, DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        next();
    });

}
