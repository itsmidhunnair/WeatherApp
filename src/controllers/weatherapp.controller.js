let axios = require('axios');
let dotenv = require('dotenv');

dotenv.config();

let baseUrl = process.env.BASE_URL
let key = process.env.API_KEY

const weatherReport = async (req, res) => {
    let city = req.body.city;

    // console.log(city);

    let url = baseUrl+'q='+city+'&appid='+key;
    console.log(url);

    try{
        let {data} = await axios.get(url)
        
        city = data.name;

        let temperature = parseFloat(data.main.temp-273.15).toFixed(2);
    
        res.render('home',{name: city,temp: temperature});
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
    
}

module.exports = {weatherReport}