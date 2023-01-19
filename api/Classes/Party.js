class Party
{
    constructor(result)
    {
        this.id = result['id']
        this.partyid = result['partyid']
        this.partyname = result['partyname']
    }
}

module.exports = Party