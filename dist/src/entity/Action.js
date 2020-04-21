"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action;
(function (Action) {
    // channel join
    Action["Join"] = "join";
    // channel join listen-only
    Action["JoinMuted"] = "join_muted";
    // kick user from a channel
    Action["Kick"] = "kick";
    // sign in
    Action["Login"] = "login";
    // mute or unmute one, all, or all but one users for all users in channel.
    Action["Mute"] = "mute";
})(Action || (Action = {}));
exports.default = Action;
