'use strict';

var MetricListActions = require('../actions/MetricListActions');

class MetricListStore {
    constructor() {
        this.bindActions(MetricListActions);
    }

    onUpdateItemList(itemListData) {
        this.itemListData = itemListData;
        console.log('onUpdateItemData', itemListData);
    }

    getItemListData() {
        return this.itemListData;
    }

    getItemDataByKey(key) {
        return this.itemListData[key];
    }

    onNewItemData(data) {
        var key = data.key;
        var newItemValue = data.newValue;
        var item = this.itemListData[key];
        item.data.push(newItemValue);
        item.latest = newItemValue;
        this.itemListData[key] = item;
    }

}
