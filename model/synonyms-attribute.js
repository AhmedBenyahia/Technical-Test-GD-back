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
        required: true,
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
    },
    default_value: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    roles: {
        type: [{
            type: String,
            maxLength: 500,
            trim: true,
        }]
    },
    validations: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    required: {
        type: Boolean,
        default: false
    },
    variant: false,
    values: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    requirement_level: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    values_list: {
        type: [{
            type: String,
            maxLength: 500,
            trim: true,
        }]
    },
    type: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    example: {
        type: String,
        maxLength: 500,
        trim: true,
    },
    type_parameter: {
        type: String,
        maxLength: 500,
        trim: true,
    },
});

const SynonymsAttribute = mongoose.model('synonymsAttribute', synonymsAttributeSchema);

exports.synonymsAttributeSchema = synonymsAttributeSchema;
exports.SynonymsAttribute = SynonymsAttribute;


