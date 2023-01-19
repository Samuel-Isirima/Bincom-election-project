const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { getPollingUnitResultByPollingUnit, getPollingUnits } = require('./api/Database/Database-API')
/*
Cors for allowing cross site requests
*/
app.use(cors({ origin: '*' }))

app.use(express.json())

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


app.get('/api/get/polling-unit-results', (req, res) =>
{
    polling_unit_uinque_id = 8
    //data = req.body
	//polling_unit_uinque_id = data.polling_unit_uinque_id

    try
    {
        getPollingUnitResultByPollingUnit(polling_unit_uinque_id, function(result)
        {
        results = result
        res.status(200).json({ results: JSON.stringify(results), message: "Results fetched successfully" })
        })
    }
    catch(error)
    {
        console.log(error)
		res.status(500).json({ message: `An unexpected error has occured. Please try again later. ${error}` })
    }

})



app.get('/api/get/polling-units', (req, res) =>
{

    try
    {
        getPollingUnits(function(polling_units)
        {
        polling_units = polling_units
        res.status(200).json({ polling_units: JSON.stringify(polling_units), message: "Polling Units fetched successfully" })
        })
    }
    catch(error)
    {
        console.log(error)
		res.status(500).json({ message: `An unexpected error has occured. Please try again later. ${error}` })
    }

})


app.listen(7072, ()=>
{
console.log('Main Software, listening on port 7072')    
})