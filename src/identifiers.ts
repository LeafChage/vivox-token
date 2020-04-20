import ChannelType from "./entity/ChannelType";

namespace Identifiers {
    export const Prefix = "confctl";
    export const channelName = (type: ChannelType, issuer: string, channelID: string) => {
        return Prefix + type + issuer + "." + channelID
    }

    export const serverName = (issuer: string) => {
        return issuer + "-service"
    }

    export const userName = (issuer: string, userID: string) => {
        return "." + issuer + "." + userID + ".";
    }
}

export default Identifiers;