'use strict';

//var shop = require('../../../common/api/shop');
var MetricActions = require('../actions/MetricActions');

module.exports = {
    
    loadTestItem: function () {
        MetricActions.updateItemData({
            data: [0,1,2],
            latest: 2
        });
    },
    
    getAllProducts: function () {
        // shop.getProducts(function (products) {
        //     ActionCreators.receiveProducts(products);
        // });
    },

    checkoutProducts: function (products) {
        // shop.buyProducts(products, function () {
        //     ActionCreators.finishCheckout(products);
        // });
    }
};