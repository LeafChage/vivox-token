"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = require("crypto");
var Util;
(function (Util) {
    Util.base64URLEncode = (str) => {
        return base64EncodeAndReplaceCharacter(Buffer.from(str));
    };
    Util.hmacSHA256Base64Encode = (seed, key) => {
        const hmac = Crypto.createHmac('sha256', key);
        hmac.update(seed);
        return base64EncodeAndReplaceCharacter(hmac.digest());
    };
    const base64EncodeAndReplaceCharacter = (buf) => {
        return buf
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/\=+$/, '');
    };
})(Util || (Util = {}));
exports.default = Util;
