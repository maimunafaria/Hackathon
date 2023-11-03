const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    country_name: {
        type: String,
        required: true
    },
    iso2: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    co2_emissions: {
        type: String,
    },
    gdp: {
        type: String,
        required: true
    },
    gdp_growth: {
        type: String,
        required: true
    },
    gdp_per_capita: {
        type: String,
        required: true
    },
    population: {
        type: String,
        required: true
    },
    population_growth: {
        type: String,
        required: true
    }
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = {Location};
