const {Schema, model} = require('mongoose');

const subscriberSchema = new Schema({
    serverAddress: {type: String, required: true},
    token: {type: String, required: true},
},
{
    timestamps: true
});

module.exports = model('Subscriber', subscriberSchema, 'subscribers');