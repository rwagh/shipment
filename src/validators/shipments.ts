 export class Shipments {
    check(args:any){
        let required = ["carrier", "service", "to", "package", "notification_email", "create_shipping_label"];
        let result = new Array();
        required.forEach(x=>{
            if (args[x]) {
                if (args[x] === "") {
                    result.push({ valid: false, message: `${x} required`});
                }
            } else {
                result.push({ valid: false, message: `${x} required`});
            }
        })
        return result;
    }
}