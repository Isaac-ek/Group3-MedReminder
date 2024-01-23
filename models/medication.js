const mongoose = require('mongoose')


// Create a schema
const medicationSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: {
        type: String,
        required: true,
    },
    dosage: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
    nextDose: {
        type: Date,
        required: true,
    },
});


const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;