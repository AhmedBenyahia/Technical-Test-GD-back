const mongoose = require('mongoose');


const synonymsAttributeSchema = new mongoose.Schema( {
    code: {
        type: String,
        maxLength: 500,
        trim: true,
        required: true
    },
    hierarchy_code: {
        type: String,
        maxLength: 500,
        trim: true,
        default: null
    },
    description_translations: {
        type: [new mongoose.Schema({
            locale: {
                type: String,
                maxLength: 500,
                trim: true,
            },
            value: {
                type: String,
                maxLength: 500,
                trim: true,
            }
        })],
    },
    label: {
        type: String,
        maxLength: 500,
        trim: true,
        required: true
    },
    label_translations: {
        type: [new mongoose.Schema({
            locale: {
                type: String,
                maxLength: 500,
                trim: true,
            },
            value: {
                type: String,
                maxLength: 500,
                trim: true,
            }
        })],
    },
    value: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    description: {
        type: String,
        maxLength: 500,
        trim: true,
    }
});

const SynonymsAttribute = mongoose.model('synonymsAttribute', synonymsAttributeSchema);

exports.synonymsAttributeSchema = synonymsAttributeSchema;
exports.SynonymsAttribute = SynonymsAttribute;


