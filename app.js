const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./ui/static-files'))

/*
Routing for all UI pages
This is so all html and resource files can be organized in an 
orderly manner in their directories in order to keep the project tree clean
*/

app.get('/home', (req, res) => 
{
res.status(200).sendFile(path.resolve(__dirname, './ui/index.html'))
})

app.get('/polling-units-results', (req, res) => 
{
res.status(200).sendFile(path.resolve(__dirname, './ui/polling-unit-results.html'))
})

app.get('/top-navbar', (req, res) => 
{
res.status(200).sendFile(path.resolve(__dirname, './ui/local-government-results.html'))
})

app.get('/record-polling-unit-result', (req, res) => 
{
res.status(200).sendFile(path.resolve(__dirname, './ui/side-navbar.html'))
})





app.listen(7071, ()=>
{
console.log('Main app root, listening on 7071')    
})