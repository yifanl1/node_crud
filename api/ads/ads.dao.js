const mongoose = require('mongoose');
const adsSchema = require('./ads.model');

adsSchema.statics = {
    create : function(data, cb) {
        const ad = new this(data);
        ad.save(cb);
    },

    get: function(query, cb) {
        this.findById(query, cb);
    },

    getAllWithCustomerId: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findByIdAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findByIdAndDelete(query,cb);
    }
}

const adsModel = mongoose.model('Ads', adsSchema);
module.exports = adsModel;