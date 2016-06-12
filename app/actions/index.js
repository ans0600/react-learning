'use strict';

import fetch from 'isomorphic-fetch'


function receiveItemListData(data) {
    return {
        type: 'RECEIVE_ITEM_LIST',
        data: data
    }
}


function fetchMetricList() {
    return dispatch => {
        dispatch(receiveItemListData())
    };
}

export function updateItemList() {
    return (dispatch, getState) => {
        return dispatch(fetchMetricList());
    }
}

export const testUpdateItemList = () => {
    return receiveItemListData([{
        data: [0, 1, 2],
        latest: 2,
        key: 0
    },
        {
            data: [3, 4, 5],
            latest: 5,
            key: 1
        }])
};

export const updateMetric = (index, newValue) =>  {
    return  {
        type: 'UPDATE_METRIC',
        index: index,
        newValue: newValue
    };
};


// export const updateItemList = () => {
//     return {
//         type: 'UPDATE_ITEM_LIST'
//     }
//    
// };

// class MetricListActions {
//     constructor() {
//         this.generateActions(
//             'updateItemList',
//             'newItemData'
//         );
//     }
// }


// alt.createActions(MetricListActions, exports);