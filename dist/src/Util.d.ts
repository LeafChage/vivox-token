declare namespace Util {
    const base64URLEncode: (str: string) => string;
    const hmacSHA256Base64Encode: (seed: string, key: string) => string;
}
export default Util;
