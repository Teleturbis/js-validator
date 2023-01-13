"use strict";
function isAlphaNumericPunctuation(value, options) {
    if (options === null || options === void 0 ? void 0 : options.space) {
        return /^[a-zA-Z.,;:&%$§"!?()'`´0-9\-\s]+$/.test(value);
    }
    return /^[a-zA-Z.,;:&%$§"!?()'`´0-9\-]+$/.test(value);
}
module.exports = isAlphaNumericPunctuation;
