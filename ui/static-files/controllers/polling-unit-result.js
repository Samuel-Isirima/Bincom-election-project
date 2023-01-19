var result, polling_unit_unique_id

polling_unit_select = `.pus`
total_number_of_votes_container = `.tnv`

$(document).on('change', polling_unit_select, function (e)
{
polling_unit_unique_id = $(this).val()
if(!validateNumber(polling_unit_unique_id))
    {
        //Show error
    }
else
    {
        getPollingUnitData(polling_unit_unique_id)
    }
})

const getPollingUnits = async () =>
{

    const fetchOptions = {
        method: 'GET',
        headers: {
                    "Content-Type": "application/json",
                    /* No authorization needed */
                 },
        body:  null,
        }

response = await fetch("http://localhost:7072/api/get/polling-units", fetchOptions)
data = await response.json()
polling_units = data.polling_units
polling_units = JSON.parse(polling_units)
if(response.status != 200)
return
//Render polling units
Object.keys(polling_units).forEach((key) => 
    {
    unit = polling_units[key]
console.log(unit)
$(polling_unit_select).append(`<option value="${unit.uniqueid}">${unit.polling_unit_name}</p>`)
	})



console.log(polling_units.length)

}

getPollingUnits()


const renderPollingUnitResults = (result) =>
{
 

total_number_of_votes = result.length
$(total_number_of_votes_container).empty()
$(total_number_of_votes_container).append(total_number_of_votes)
}

const getPollingUnitData = async (polling_unit_unique_id) => 
{

const fetchOptions = {
        method: 'GET',
        headers: {
                    "Content-Type": "application/json",
                    /* No authorization needed */
                 },
        body:  JSON.stringify({
                polling_unit_unique_id: polling_unit_unique_id,
              })
        }

response = await fetch("http://localhost:7072/api/get/polling-unit-results", fetchOptions)
data = await response.json()
result = data.results

removeLoader(pollingUnitResultsContainer)
if(response.status != 200)
{
    $(pollingUnitResultsContainer).append(`<p style="color: red">${data.message}</p>`)
}

renderPollingUnitResults(result)
}


function validateNumber (number)
{
    if(number == '' || number == undefined || number == null || number == ' ' || number < 1)
	{return false}
	else
	{return true}
}



