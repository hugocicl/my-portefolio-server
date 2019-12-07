const express = require('express')

const app = express()

const baseDir = './build';

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 4000

app.listen(port, () => console.log(`Running at http://localhost:${port}`))
