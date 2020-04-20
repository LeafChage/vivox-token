import Util from "./Util";
import Header from "./entity/Header";
import Payload from "./entity/Payload";
import Signature from "./Signature";
import Action from "./entity/Action";
import Identifiers from "./Identifiers";
import ChannelType from "./entity/ChannelType";

class VivoxToken {
  static readonly ADaySecond = 1000 * 60 * 60 * 24;
  public issuer: string;
  public key: string;
  public domain: string;
  public adminAccount: string;

  public constructor(issuer: string, key: string, domain: string, adminAccount: string) {
    this.issuer = issuer;
    this.key = key;
    this.domain = "@" + domain;
    this.adminAccount = adminAccount;
  }

  public login(
    userID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
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

  public join(
    userID: string,
    channelType: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Join,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, userID) + this.domain,
      t: "sip:" + Identifiers.channelName(channelType, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public joinMuted(
    userID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.JoinMuted,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, userID) + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kick(
    fromUserID: string,
    toUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + Identifiers.userName(this.issuer, fromUserID) + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickByAdmin(
    toUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + this.adminAccount + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickUserFromServer(
    fromUserID: string,
    toUserID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + Identifiers.userName(this.issuer, fromUserID) + this.domain,
      t: "sip:" + Identifiers.serverName(this.issuer) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickUserFromServerByAdmin(
    toUserID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + this.adminAccount + this.domain,
      t: "sip:" + Identifiers.serverName(this.issuer) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickAllUserFromChannel(
    userID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, userID) + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public kickAllUserFromChannelByAdmin(
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond)
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Kick,
      vxi: serialNumber,
      f: "sip:" + this.adminAccount + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public mute(
    fromUserID: string,
    toUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + Identifiers.userName(this.issuer, fromUserID) + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteByAdmin(
    toUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + this.adminAccount + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteAllUserFromChannel(
    fromUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      f: "sip:" + Identifiers.userName(this.issuer, fromUserID) + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteAllUserFromChannelByAdmin(
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      f: "sip:" + this.adminAccount + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteAllUserFromChannelExcludeOneUser(
    fromUserID: string,
    toUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + Identifiers.userName(this.issuer, fromUserID) + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
    };
    return this.makeToken(header, payload);
  };

  public muteAllUserFromChannelExcludeOneUserByAdmin(
    toUserID: string,
    type: ChannelType,
    channelID: string,
    serialNumber: number = Date.now(),
    expiredAt: Date = new Date(Date.now() + VivoxToken.ADaySecond),
  ): string {
    const header: Header = {};
    const payload: Payload = {
      iss: this.issuer,
      exp: Math.floor(expiredAt.getTime() / 1000),
      vxa: Action.Mute,
      vxi: serialNumber,
      sub: "sip:" + Identifiers.userName(this.issuer, toUserID) + this.domain,
      f: "sip:" + this.adminAccount + this.domain,
      t: "sip:" + Identifiers.channelName(type, this.issuer, channelID) + this.domain,
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