import React from 'react';
import 'whatwg-fetch';

//Config
import { Config } from '../Config';
import { State } from '../State';

/**
 * @brief Convert json object to query string.
 * 
 * @param {JSON} object Json object to convert.
 * 
 * @returns {String} Query string.
 */
module.exports.jsonToQueryStr = function(object) {

    //If object does not contain items. return.
    if (object == null) return '';

    //Create query.
    let queryStr = '';

    //Loop through keys.
    for(let key in object) {

        //If item is not null.
        if(object[key] != null) {

            //Add start or separation character.
            if(queryStr == '') queryStr += '?';
            else queryStr += '&';
            
            //If item is array, add array ro query. Else add item.
            if(Array.isArray(object[key])) {

                //Loop thourgh all array items.
                for(let i = 0; i < object[key].length; i++) {

                    //If not first item, add separator.
                    if(i > 0) queryStr += '&';

                    //Add item to query.
                    queryStr += key + '[]=' + object[key][i];

                }

            } else {

                //Add item to query.
                queryStr += key + '=' + object[key];

            }
        }

    }

    //Return query string.
    return queryStr;
}

function createPromise( status, data, useReject = false ){
    return new Promise( ( resolve, reject ) => {
        if( useReject === true ){
            reject({
                status: status,
                data: data
            });
        }else{
            resolve({
                status: status,
                data: data
            });
        }
    });
}

module.exports.GET = function( query ){
    let status = 300;

    return fetch( Config.baseApiUrl + query ,{
        method:'GET',
        headers:{
            'Accept' : 'application/json',
            'Content-Type':'application/json',
            'bid' : State.authentication.bid,
            'uid' : State.authentication.uid,
            'sid' : State.authentication.sid
        }
    }).then( ( response ) => {
        status = response.status;
        if( response.status >= 300 ){
            return response.text();
        }

        return response.json();
    }).then( ( responseJson ) => {
        return createPromise( status, responseJson, status >= 300 );
    });
}

module.exports.POST = function( query, data ){
    let status = 300;

    return fetch( Config.baseApiUrl + query ,{
        method:'POST',
        headers:{
            'Accept' : 'application/json',
            'Content-Type':'application/json',
            'bid' : State.authentication.bid,
            'uid' : State.authentication.uid,
            'sid' : State.authentication.sid
        },
        body: JSON.stringify( data )
    }).then( ( response ) => {
        status = response.status;
        if( response.status >= 300 ){
            return response.text();
        }

        return response.json();
    }).then( ( responseJson ) => {
        return createPromise( status, responseJson,  status >= 300  );
    });
}

module.exports.PUT = function( query, data ){
    let status = 300;

    return fetch( Config.baseApiUrl + query ,{
        method:'PUT',
        headers:{
            'Accept' : 'application/json',
            'Content-Type':'application/json',
            'bid' : State.authentication.bid,
            'uid' : State.authentication.uid,
            'sid' : State.authentication.sid
        },
        body: JSON.stringify( data )
    }).then( ( response ) => {
        status = response.status;
        if( response.status >= 300 ){
            return response.text();
        }
        return response.json();
    }).then( ( responseJson ) => {
        return createPromise( status, responseJson, status >= 300 );
    });
}

module.exports.DELETE = function( query, data ){
    let status = 300;

    return fetch( Config.baseApiUrl + query ,{
        method:'DELETE',
        headers:{
            'Accept' : 'application/json',
            'Content-Type':'application/json',
            'bid' : State.authentication.bid,
            'uid' : State.authentication.uid,
            'sid' : State.authentication.sid
        }
    }).then( ( response ) => {
        status = response.status;
        if( response.status >= 300 ){
            return response.text();
        }
        
        return response;
    }).then( ( responseJson ) => {
        return createPromise( status, responseJson, status >= 300 );
    });
}