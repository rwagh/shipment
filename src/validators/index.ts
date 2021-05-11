import { Address } from "./address";
import { Tracker } from "./trackers";
import { Shipments } from "./shipments";
import { Quotes } from "./quotes";
import { Pickups } from "./pickups";
const validate = {
    address: new Address(),
    tracker: new Tracker(),
    shipments: new Shipments(),
    quotes: new Quotes(),
    pickups: new Pickups()
}
export default validate;