import Header from "./header";
import Payload from "./payload";
import Util from "./util";

namespace Signature {
    export const sign = (header: Header, payload: Payload, key: string) => {
        return Util.hmacSHA256Base64Encode(Util.base64URLEncode(JSON.stringify(header)) + "." + Util.base64URLEncode(JSON.stringify(payload)), key);
    }
}

export default Signature;