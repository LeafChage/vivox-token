import ChannelType from './entity/ChannelType';
declare namespace Identifiers {
    const Prefix = "confctl";
    const channelName: (type: ChannelType, issuer: string, channelID: string) => string;
    const serverName: (issuer: string) => string;
    const userName: (issuer: string, userID: string) => string;
}
export default Identifiers;
