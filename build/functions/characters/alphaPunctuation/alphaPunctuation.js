"use strict";
function isAlphaPunctuation(value, options) {
    if (options === null || options === void 0 ? void 0 : options.space) {
        return /^[a-zA-Z.,;:&%$§"!?()'`´\-\s]+$/.test(value);
    }
    return /^[a-zA-Z.,;:&%$§"!?()'`´\-]+$/.test(value);
}
module.exports = isAlphaPunctuation;
