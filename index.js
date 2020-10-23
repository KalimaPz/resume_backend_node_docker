const password = ""
const dbname = ""
const connectString = `mongodb+srv://donnukrit:${password}@cluster0.q3nd7.mongodb.net/${dbname}?retryWrites=true&w=majority`
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const HOST = '0.0.0.0'
const PORT = process.env.PORT || 8080

mongoose.connect(
    connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

var db = mongoose.connection
db.on("error", console.error.bind(console, "Failed to Connecting with Mongo Atlas"))
db.once("open", function callback() {

    console.log("Success to Connecting with Mongo Atlas")
})

app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        "msg": "Mongo Atlas Service"
    })
})

app.use(require("./api/person"))



app.listen(PORT, HOST, () => {
    console.log("Server is running on port :", PORT)
})