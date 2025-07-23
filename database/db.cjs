const mongoose = require("mongoose")
 require("dotenv").config();

const dbConnection = ()=>{
    mongoose.connect(process.env.DBURL)

    .then(()=>{
        console.log("db connected")
    })
    .catch((err)=>{
          console.log(err,"error occured")
    })
}
mongoose.set('debug', true);

module.exports = {dbConnection}

