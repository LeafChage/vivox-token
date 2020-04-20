"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Identifiers;
(function (Identifiers) {
    Identifiers.Prefix = "confctl";
    Identifiers.channelName = (type, issuer, channelID) => {
        return Identifiers.Prefix + type + issuer + "." + channelID;
    };
    Identifiers.serverName = (issuer) => {
        return issuer + "-service";
    };
    Identifiers.userName = (issuer, userID) => {
        return "." + issuer + "." + userID + ".";
    };
})(Identifiers || (Identifiers = {}));
exports.default = Identifiers;
