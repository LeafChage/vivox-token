import Header from "./entity/Header";
import Payload from "./entity/Payload";
declare namespace Signature {
    const sign: (header: Header, payload: Payload, key: string) => string;
}
export default Signature;
