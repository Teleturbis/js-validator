"use strict";
function isValidMail(email) {
    var tester = /^[-'*+\/0-9=?A-Z^_a-z{}~](\.?[-'*+\/0-9=?A-Z^_a-z{}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email || typeof email === 'number') {
        return { isValid: false, message: 'Email is invalid!' };
    }
    var emailParts = email.split('@');
    if (emailParts.length !== 2) {
        return { isValid: false, message: 'Email is invalid!' };
    }
    var account = emailParts[0];
    var address = emailParts[1];
    if (account.length > 64) {
        return { isValid: false, message: 'Email is invalid!' };
    }
    else if (address.length > 255) {
        return { isValid: false, message: 'Email is invalid!' };
    }
    var domainParts = address.split('.');
    if (domainParts.some(function (part) {
        return part.length > 63;
    })) {
        return { isValid: false, message: 'Email is invalid!' };
    }
    if (!tester.test(email)) {
        return { isValid: false, message: 'Email is invalid!' };
    }
    return { isValid: true, message: 'Email is valid!' };
}
module.exports = isValidMail;
