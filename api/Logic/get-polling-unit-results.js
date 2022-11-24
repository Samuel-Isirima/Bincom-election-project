const { getPollingUnitResultByPollingUnit } = require("../Database/Database-API")


const polling_unit_uinque_id = 8
results = getPollingUnitResultByPollingUnit(polling_unit_uinque_id, function(result)
{
console.log(result)
})