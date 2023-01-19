class Polling_Unit_Result
{

    constructor(result_object)
    {
        this.result_id = result_object['result_id']
        this.polling_unit_unique_id = result_object['polling_unit_uniqueid']
        this.party_abbreviation = result_object['party_abbreviation']
        this.party_score = result_object['party_score']
        this.entered_by_user = result_object['entered_by_user']
        this.date_entered = result_object['date_entered']
        this.user_ip_address = result_object['user_ip_address']
    }
}

module.exports = Polling_Unit_Result