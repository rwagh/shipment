import { Address } from "./address";
import { Tracker } from "./trackers";
import { Shipments } from "./shipments";
import { Quotes } from "./quotes";
const validate = {
    address: new Address(),
    tracker: new Tracker(),
    shipments: new Shipments(),
    quotes: new Quotes()
}
export default validate;