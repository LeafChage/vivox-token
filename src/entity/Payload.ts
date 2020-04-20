interface Payload {
  // Issuer in https://developer.vivox.com/
  iss: string;

  // expiration time
  exp: number;

  // Vivox action
  vxa: string;

  // serial number, to guarantee uniqueness within an epoch second
  vxi: number;

  // subject; used in third-party call control
  sub?: string;

  // from; the SIP URI of the requestor
  f?: string;

  // to; the SIP URI of the channel
  t?: string;
}


export default Payload;