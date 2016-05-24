'use strict';

var alt = require('../alt');
var MetricActions = require('../actions/MetricActions');

class MetricItemStore {
    constructor() {
        this.bindActions(MetricActions);
    }

    onUpdateItemData(itemData) {
        this.itemData = itemData;
        console.log('onUpdateItemData', itemData);
    }

    onNewItemData(newItemValue) {
        this.itemData.data.push(newItemValue);
        this.itemData.latest=newItemValue;
    }

    getItemData() {
        return this.itemData;
    }


}

module.exports = alt.createStore(MetricItemStore, 'MetricItemStore');
