const express = require('express')
const { urlencoded } = require('express')

app = express()
app.use(urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile("key.html", {root: __dirname + '/views'})
})

app.post('/', (req, res) => {
    if (req.body.key === "ilovecheese200311") {
        res.send("\nFLAG: mycrushrejectedme258")
    } else {
        res.send("\nDON'T BE SO STUPID I'VE ALREADY GAVE YOU THE KEY DUDE!")
    }
})

app.post('/checkflag', (req, res) => {
    if (req.body.keyinput === "mycrushrejectedme258") {
        res.send("<h3 style='color: green'>The key is correct !</h3>")
    } else {
        res.send("<h3 style='color: red'>The key is not correct !</h3>")
    }
})

app.listen(process.env.PORT || 3000)