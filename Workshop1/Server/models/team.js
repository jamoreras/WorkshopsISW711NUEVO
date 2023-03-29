const mongoose = require('mongoose');
const UserScheme=mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    }
});
module.exports=mongoose.model('team',UserScheme)