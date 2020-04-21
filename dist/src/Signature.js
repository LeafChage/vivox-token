"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("./Util");
var Signature;
(function (Signature) {
    Signature.sign = (header, payload, key) => {
        return Util_1.default.hmacSHA256Base64Encode(Util_1.default.base64URLEncode(JSON.stringify(header)) +
            '.' +
            Util_1.default.base64URLEncode(JSON.stringify(payload)), key);
    };
})(Signature || (Signature = {}));
exports.default = Signature;
