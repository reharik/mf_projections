/**
 * Created by rharik on 10/1/15.
 */
"use strict";

var extend = require('extend');
var config = require('config');

module.exports = async function(_options) {
    var options = {
        //dagon:{
        //    application:'projections'
        //}
    };
    extend(options, config.get('configs') || {}, _options || {});
    var container = require('./registry')(options);
    var dispatcher = container.getInstanceOf('eventdispatcher');
    var handlers = container.getArrayOfGroup('EventHandlers');
    await dispatcher.startDispatching(handlers);
    return container;
}();

