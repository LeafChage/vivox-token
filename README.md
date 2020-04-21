# vivox-token

# How to use
```ts
// ts or js
const {VivoxToken, ChannelType} = require('vivox-token');

const issuer = "blindmelon-foobar-dev"; 
const secretKey = "secret!";
const domain = "tla.vivox.com";
const adminUserID = "BlindMelon-FooBar-dev-Admin";
const vivoxToken = new VivoxToken("issur", secretKer, domain, adminUserID);

const loginToken = vivoxToken.login("any_user_id");

// return login token to client apllication.
```

# Methods
```ts
interface IVivoxTokenPublisher {
  login(userID: string, serialNumber: number, expiredAt: Date): string;
  join(userID: string, channelType: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  joinMuted(userID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  
  // token for user
  kick(fromUserID: string, toUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  kickUserFromServer(fromUserID: string, toUserID: string, serialNumber: number, expiredAt: Date): string;
  kickAllUserFromChannel(userID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  mute(fromUserID: string, toUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  muteAllUserFromChannel(fromUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  muteAllUserFromChannelExcludeOneUser(fromUserID: string, toUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  
  // token for admin
  kickByAdmin(toUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  kickUserFromServerByAdmin(toUserID: string, serialNumber: number, expiredAt: Date): string;
  kickAllUserFromChannelByAdmin(type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  muteByAdmin(toUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  muteAllUserFromChannelByAdmin(type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
  muteAllUserFromChannelExcludeOneUserByAdmin(toUserID: string, type: ChannelType, channelID: string, serialNumber: number, expiredAt: Date): string;
}
  ```