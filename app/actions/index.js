'use strict';

import fetch from 'isomorphic-fetch'


function receiveItemListData(data) {
    return {
        type: 'RECEIVE_ITEM_LIST',
        data: data
    }
}

function receiveThingConfig(data) {
    return {
        type: 'RECEIVE_THING_CONFIG',
        data: data
    }
}

export function fetchItemList(deviceID) {
    return (dispatch, getState) => {
        return fetch(`/api/test.json`)
          .then(response => response.json())
          .then(json=> dispatch(receiveItemListData(json)))
    }
}

export function fetchThingConfig(deviceID) {
    return (dispatch, getState) => {
        return fetch(`/api/config.json`)
          .then(response => response.json())
          .then(json=> dispatch(receiveThingConfig(json)))
    }
}

export const updateMetric = (itemKey, newValue) =>  {
    return  {
        type: 'UPDATE_METRIC',
        itemKey: itemKey,
        newValue: newValue,
        timeStamp: (new Date).getTime() * 1000  //todo
    };
};
