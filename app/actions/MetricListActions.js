'use strict';

var alt = require('../alt');

class MetricListActions {
    constructor() {
        this.generateActions(
            'updateItemList',
            'newItemData'
        );
    }
}


alt.createActions(MetricListActions, exports);