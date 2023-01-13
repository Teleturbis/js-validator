"use strict";
function isAlphaNumeric(str, options) {
    if (options === null || options === void 0 ? void 0 : options.space) {
        return /^[a-zA-Z0-9.\s]+$/.test(str);
    }
    return /^[a-zA-Z0-9.]+$/.test(str);
}
module.exports = isAlphaNumeric;
