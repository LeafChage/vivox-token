import ChannelType from './entity/ChannelType';
export declare class VivoxToken {
    static readonly ADaySecond: number;
    issuer: string;
    key: string;
    domain: string;
    adminAccount: string;
    constructor(issuer: string, key: string, domain: string, adminAccount: string);
    login(userID: string, serialNumber?: number, expiredAt?: Date): string;
    join(userID: string, channelType: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    joinMuted(userID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    kick(fromUserID: string, toUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    kickByAdmin(toUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    kickUserFromServer(fromUserID: string, toUserID: string, serialNumber?: number, expiredAt?: Date): string;
    kickUserFromServerByAdmin(toUserID: string, serialNumber?: number, expiredAt?: Date): string;
    kickAllUserFromChannel(userID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    kickAllUserFromChannelByAdmin(type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    mute(fromUserID: string, toUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    muteByAdmin(toUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    muteAllUserFromChannel(fromUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    muteAllUserFromChannelByAdmin(type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    muteAllUserFromChannelExcludeOneUser(fromUserID: string, toUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    muteAllUserFromChannelExcludeOneUserByAdmin(toUserID: string, type: ChannelType, channelID: string, serialNumber?: number, expiredAt?: Date): string;
    private makeToken;
}
