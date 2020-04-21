import * as Crypto from 'crypto';

namespace Util {
  export const base64URLEncode = (str: string) => {
    return base64EncodeAndReplaceCharacter(Buffer.from(str));
  };

  export const hmacSHA256Base64Encode = (seed: string, key: string) => {
    const hmac = Crypto.createHmac('sha256', key);
    hmac.update(seed);
    return base64EncodeAndReplaceCharacter(hmac.digest());
  };

  const base64EncodeAndReplaceCharacter = (buf: Buffer) => {
    return buf
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/\=+$/, '');
  };
}

export default Util;
