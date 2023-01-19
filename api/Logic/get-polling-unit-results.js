const { getPollingUnitResultByPollingUnit } = require("../Database/Database-API")

const polling_unit_uinque_id = 8
var results = '';
getPollingUnitResultByPollingUnit(polling_unit_uinque_id, function(result)
{
results = result
console.log(results)
})

