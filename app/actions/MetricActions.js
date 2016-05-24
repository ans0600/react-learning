'use strict';

var alt = require('../alt');

class MetricActions {
    constructor() {
        this.generateActions(
            'updateItemData',
            'newItemData'
        );
    }
}


alt.createActions(MetricActions, exports);