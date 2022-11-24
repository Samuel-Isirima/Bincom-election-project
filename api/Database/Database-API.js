const db_connection = require("./Database-Connection");

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
          return callback(result)

        })
}


module.exports = {getPartyByID, getPollingUnitResultByPollingUnit}