const express = require('express');
const app = express();

const dotenv = require('dotenv');
const { weatherReport } = require('./src/controllers/weatherapp.controller');

dotenv.config(); 

app.use(express.urlencoded({ extended: true }));

const port=process.env.PORT;


app.set('view engine','ejs')
app.set('views','./views')

const homePage = (req,res) =>{
    res.render('home')
}

const resultPage = (req,res) =>{
    res.render('result',{name:"name", temp:"temp"})
}

app.post('/',weatherReport);
app.get('/',homePage);



app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})