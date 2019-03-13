const Ads = require('./ads.controller');

module.exports = function(router) {
    router.post('/create', Ads.createAd);
    router.get('/getAllWithCustomerId/:customerId', Ads.getAllWithCustomerId);
    router.get('/get/:id', Ads.getAd);
    router.put('/update/:id', Ads.updateAd);
    router.delete('/remove/:id', Ads.removeAd);
}
