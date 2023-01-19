class Polling_Unit
{
    constructor (result)
    {
      this.uniqueid = result['uniqueid']
      this.polling_unit_id = result['polling_unit_id']
      this.ward_id = result['ward_id']
      this.lga_id = result['lga_id']
      this.unique_ward_id = result['unique_ward_id']
      this.polling_unit_number = result['polling_unit_number']
      this.polling_unit_name = result['polling_unit_name']
      this.polling_unit_description = result['polling_unit_description'] 
    }
}

module.exports = Polling_Unit