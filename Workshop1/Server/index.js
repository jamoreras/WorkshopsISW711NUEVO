const express = require('express');
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const userRoute=require('./rutas/routeTeams')
app.use(bodyParser.json());
app.get('/tipocambio', (req, res)=>{
    res.json({
        "TipoCompradoDolares":"608",
        "TipoVentaDolares":"621",
        "TipoCompradoEuros":"731.85",
        "TipoVentaEuros":"608"
    });
});
mongoose.connect("mongodb://localhost:27017/teams").then(()=>console.log('Conected to mongodb')).catch((error)=>console.error(error));

app.use(express.json());

//middleware
app.use('/api',userRoute);

app.listen(3000,()=> console.log('Fifa app listening'));
