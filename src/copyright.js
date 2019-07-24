/**
 * copyright module
 * @module @ehsawyer/copyright
 */

"use strict";

const defaultOptions = {
    showFullText    : true,
    symbol          : "©",
    copyrightHolder : require("./package.json").author,
    initialYear     : new Date().getFullYear(),
    lastUpdatedYear : null
};

/**
 * @description
 * Generates a custom copyright notice
 * 
 * @author Ethan Sawyer <ethan@ehsawyer.uk>
 *
 * @param {Object}          userOptions                 Contains user options
 * @param {boolean}         userOptions.showFullText    Toggles "Copyright" showing
 * @param {string}          userOptions.symbol          Symbol to use in copyright notice
 * @param {string}          userOptions.copyrightHolder Name or company name holding copyright
 * @param {(number|string)} userOptions.initialYear     Year of initial publication
 * @param {number}          userOptions.lastUpdatedYear Year of most recent update
 * 
 * @example
 * copyright({
 *     showFullText : true,
 *     symbol : "©",
 *     copyrightHolder :  "Ethan Sawyer",
 *     initialYear : 2017,
 *     lastUpdatedYear : 2019
 * })
 * 
 * copyright({
 *     copyrightHolder :  "Ethan Sawyer",
 *     initialYear : 2017
 * })
 * 
 * @returns {string} Generated copyright notice
 */
module.exports = function(userOptions) {
    if (typeof userOptions !== "object") userOptions = {};

    let options = Object.assign({}, defaultOptions, userOptions),
        fullText = "Copyright ",
        lastUpdated = "";

    if (options.showFullText === false) fullText = '';
    if (options.lastUpdatedYear === "current") options.lastUpdatedYear = new Date().getFullYear();
    if (!isNaN(options.lastUpdatedYear) && options.lastUpdatedYear !== null) lastUpdated = `-${options.lastUpdatedYear}`;

    return `${fullText}${options.symbol} ${options.copyrightHolder} ${options.initialYear}${lastUpdated}`;
};