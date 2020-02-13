import Util from "./util";
import Header from "./header";
import Payload from "./payload";
import Signature from "./signature";
import Action from "./action";
import Identifiers from "./identifiers";

class VivoxToken {
  static readonly ADaySecond = 1000 * 60 * 60 * 24;
  public issuer: string;
  public key: string;
  public domain: string;

  public constructor(issuer: string, key: string, domain: string) {
    this.issuer = issuer;
    this.key = key;
    this.domain = "@" + domain;
  }

  public login(userID: string, serialNumber: number, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Login,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, userID) + this.domain
    };
    return this.makeToken(header, payload);
  };

  public join(userID: string, serialNumber: number, channelID: string, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Join,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, userID) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public joinMuted(userID: string, serialNumber: number, channelID: string = "", expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.JoinMuted,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, userID) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kick(fromUserID: string, toUserID: string, serialNumber: number, channelID: string, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond), isFromAdmin: boolean = false, isToAllUser = false): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + (isFromAdmin ? Identifiers.adminUserName(fromUserID) : Identifiers.userName(this.issuer, fromUserID)) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickUserFromServer(adminUserID: string, toUserID: string, serialNumber: number, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + Identifiers.adminUserName(adminUserID) + this.domain,
      t: "sip:" + Identifiers.serverName(this.issuer) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickAllUserFromChannel(adminUserID: string, serialNumber: number, channelID: string, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      f: "sip:" + Identifiers.adminUserName(adminUserID) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public mute(fromUserID: string, toUserID: string, serialNumber: number, channelID: string, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond), isFromAdmin: boolean = false): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + (isFromAdmin ? Identifiers.adminUserName(fromUserID) : Identifiers.userName(this.issuer, fromUserID)) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteAllUserFromChannel(fromUserID: string, serialNumber: number, channelID: string, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond), isFromAdmin: boolean = false): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      f: "sip:" + (isFromAdmin ? Identifiers.adminUserName(fromUserID) : Identifiers.userName(this.issuer, fromUserID)) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteAllUserFromChannelExcludeOneUser(fromUserID: string, toUserID: string, serialNumber: number, channelID: string, expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond), isFromAdmin: boolean = false): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + (isFromAdmin ? Identifiers.adminUserName(fromUserID) : Identifiers.userName(this.issuer, fromUserID)) + this.domain,
      t: "sip:" + Identifiers.channelName(this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  private makeToken(header: Header, payload: Payload): string {
    return [
      Util.base64URLEncode(JSON.stringify(header)),
      Util.base64URLEncode(JSON.stringify(payload)),
      Signature.sign(header, payload, this.key)
    ].join(".");
  }
}

export default VivoxToken;