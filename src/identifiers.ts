namespace Identifiers {
    export const Prefix = "confctl-g-";
    export const channelName = (issuer: string, channelID: string) => {
        return Prefix + issuer + "." + channelID
    }

    export const serverName = (issuer: string) => {
        return issuer + "-service"
    }

    export const userName = (issuer: string, userID: string) => {
        return "." + issuer + "." + userID + ".";
    }

    export const adminUserName = (userID: string) => {
        return userID
    }
}

export default Identifiers;