"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("./Util");
const Signature_1 = require("./Signature");
const Action_1 = require("./entity/Action");
const Identifiers_1 = require("./Identifiers");
class VivoxToken {
    constructor(issuer, key, domain, adminAccount) {
        this.issuer = issuer;
        this.key = key;
        this.domain = "@" + domain;
        this.adminAccount = adminAccount;
    }
    login(userID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Login,
            vxi: serialNumber,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, userID) + this.domain
        };
        return this.makeToken(header, payload);
    }
    ;
    join(userID, channelType, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Join,
            vxi: serialNumber,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, userID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(channelType, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    joinMuted(userID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.JoinMuted,
            vxi: serialNumber,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, userID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    kick(fromUserID, toUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Kick,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, fromUserID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    kickByAdmin(toUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Kick,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + this.adminAccount + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    kickUserFromServer(fromUserID, toUserID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Kick,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, fromUserID) + this.domain,
            t: "sip:" + Identifiers_1.default.serverName(this.issuer) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    kickUserFromServerByAdmin(toUserID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Kick,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + this.adminAccount + this.domain,
            t: "sip:" + Identifiers_1.default.serverName(this.issuer) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    kickAllUserFromChannel(userID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Kick,
            vxi: serialNumber,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, userID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    kickAllUserFromChannelByAdmin(type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Kick,
            vxi: serialNumber,
            f: "sip:" + this.adminAccount + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    mute(fromUserID, toUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Mute,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, fromUserID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    muteByAdmin(toUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Mute,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + this.adminAccount + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    muteAllUserFromChannel(fromUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Mute,
            vxi: serialNumber,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, fromUserID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    muteAllUserFromChannelByAdmin(type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Mute,
            vxi: serialNumber,
            f: "sip:" + this.adminAccount + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    muteAllUserFromChannelExcludeOneUser(fromUserID, toUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Mute,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + Identifiers_1.default.userName(this.issuer, fromUserID) + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    muteAllUserFromChannelExcludeOneUserByAdmin(toUserID, type, channelID, serialNumber = Date.now(), expiredAt = new Date(Date.now() + VivoxToken.ADaySecond)) {
        const header = {};
        const payload = {
            iss: this.issuer,
            exp: Math.floor(expiredAt.getTime() / 1000),
            vxa: Action_1.default.Mute,
            vxi: serialNumber,
            sub: "sip:" + Identifiers_1.default.userName(this.issuer, toUserID) + this.domain,
            f: "sip:" + this.adminAccount + this.domain,
            t: "sip:" + Identifiers_1.default.channelName(type, this.issuer, channelID) + this.domain,
        };
        return this.makeToken(header, payload);
    }
    ;
    makeToken(header, payload) {
        return [
            Util_1.default.base64URLEncode(JSON.stringify(header)),
            Util_1.default.base64URLEncode(JSON.stringify(payload)),
            Signature_1.default.sign(header, payload, this.key)
        ].join(".");
    }
}
VivoxToken.ADaySecond = 1000 * 60 * 60 * 24;
exports.default = VivoxToken;
