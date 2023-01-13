"use strict";
function isNumeric(value, options) {
    if (options === null || options === void 0 ? void 0 : options.space) {
        return /^[0-9.\s]+$/.test(value);
    }
    return /^[0-9.]+$/.test(value);
}
module.exports = isNumeric;
