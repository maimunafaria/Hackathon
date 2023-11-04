const {Location} = require('../Model/locationModel');

async function getAllCountries(req, res) {
    const data = await Location.find({});
    console.log(data);
    return res.status(200).json(data);
}

module.exports = {
    getAllCountries
}