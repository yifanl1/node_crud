const Ads = require('./ads.dao');

exports.createAd = function (req, res, next) {
    const ad = {
        customerId: req.body.customerId,
        name: req.body.name,
        templateId: req.body.templateId,
        startDate: req.body.startDate,
        repeat: req.body.repeat,
        isActive: req.body.isActive
    };

    Ads.create(ad, function(err, ad) {
        if(err) {
            res.json({
                error : err
            })
            return;
        }

        res.json({
            message : "Ad created successfully"
        })
    })
}

exports.getAllWithCustomerId = function(req, res, next) {
    Ads.getAllWithCustomerId({customerId: req.params.customerId}, function(err, ads) {
        if(err) {
            res.json({
                error: err
            })
            return;
        }

        res.json({
            ads: ads
        })
    })
}

exports.getAd = function(req, res, next) {
    Ads.get(req.params.id, function(err, ad) {
        if(err) {
            res.json({
                error: err
            })
            return;
        }

        res.json({
            ad: ad
        })
    })
}

exports.updateAd = function(req, res, next) {
    const ad = {
        customerId: req.body.customerId,
        name: req.body.name,
        templateId: req.body.templateId,
        startDate: req.body.startDate,
        repeat: req.body.repeat,
        isActive: req.body.isActive
    };

    Ads.update(req.params.id, hero, function(err, ad) {
        if(err) {
            res.json({
                error : err
            })
            return;
        }

        res.json({
            message : "Ad updated successfully"
        })
    })
}

exports.removeAd = function(req, res, next) {
    Ads.delete(req.params.id, function(err, ad) {
        if(err) {
            res.json({
                error : err
            })
            return;
        }
        
        res.json({
            message : "Ad deleted successfully"
        })
    })
}
