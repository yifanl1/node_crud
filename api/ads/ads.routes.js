const Ads = require('./ads.controller');

module.exports = function(router) {
    router.route('/ads')
    	.post(Ads.createAd)
    	.get(Ads.getAllWithCustomerId)
    router.route('/ads/:id')
    	.get(Ads.getAd)
    	.put(Ads.updateAd)
    	.post((req, res) => {
    		res.status(405).json({error: 'Method not allowed'})
    	})
    	.delete(Ads.removeAd);

    router.route('*')
    	.get((req, res) => {
   			res.status(500).send('Sorry, this is an invalid URL.');
		});
}
