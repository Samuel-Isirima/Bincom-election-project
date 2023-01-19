const db_connection = require("./Database-Connection");
const Polling_Unit_Result = require("../Classes/Polling_Unit_Result");
const Party = require("../Classes/Party");
const Polling_Unit = require("../Classes/Polling_Unit");

const getPartyByID = function(party_id, callback)
{
        db_connection.query(`SELECT * FROM party WHERE id = ${party_id}`, function (error, result, fields) 
        {
          if (error) throw error;
          const party = new Party(result)
          return callback(party)

        })
}


const getPollingUnitResultByPollingUnit = function(polling_unit_unique_id, callback)
{
        db_connection.query(`SELECT * FROM announced_pu_results WHERE polling_unit_uniqueid = ${polling_unit_unique_id}`, function (error, result, fields) 
        {
          if (error) throw error;

          result_objects = []
          result.forEach(entry => 
            {
              result_objects.push(new Polling_Unit_Result(entry))
            });
          return callback(result_objects)

        })
}



const getPollingUnits = function(callback)
{
        db_connection.query(`SELECT * FROM polling_unit`, function (error, result, fields) 
        {
          if (error) throw error;

          result_objects = []
          result.forEach(entry => 
            {
              result_objects.push(new Polling_Unit(entry))
            });
          return callback(result_objects)

        })
}


module.exports = {getPartyByID, getPollingUnitResultByPollingUnit, getPollingUnits}