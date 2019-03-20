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
        if (err) {
            res.status(400)
                .json(err)
            return;
        }

        res.status(201)
            .json({
                message : "Ad created successfully"
            })
    })
}

exports.getAllWithCustomerId = function(req, res, next) {
    if (typeof req.query.customerId === 'undefined') {
        res.json({
            error: "Error, must provide a customer ID or an ad ID"
        })
        return;
    }

    Ads.getAllWithCustomerId({customerId: req.query.customerId}, function(err, ads) {
        if (err) {
            res.status(400)
                .json(err);
            return;
        }

        res.status(200)
            .json({
                ads: ads
            });
    })
}

exports.getAd = function(req, res, next) {
    Ads.get(req.params.id, function(err, ad) {
        if (err) {
            res.status(400)
                .json(err);
            return;
        }

        res.status(200)
            .json({
                ad: ad
            });
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
        if (err) {
            res.status(400)
                .json(err);
            return;
        }

        res.status(200)
            .json({
                message : "Ad updated successfully"
            })
    })
}

exports.removeAd = function(req, res, next) {
    Ads.delete(req.params.id, function(err, ad) {
        if (err) {
            res.status(404)
                .json(err)
            return;
        }
        
        res.status(204)
            .json({
                message : "Ad deleted successfully"
            })
    })
}
