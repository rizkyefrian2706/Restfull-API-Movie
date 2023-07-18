const router = require('./router')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router) 

const now = (() => {
    let getDateEpoch = Math.floor(new Date().getTime() / 1000.0);
    var dateToday = new Date(getDateEpoch * 1000);
    let date = dateToday.toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }); ;
    return dateToday;
});

console.log(now());
app.listen(port, () => {
    console.log(`Running with port ${port}`);
})