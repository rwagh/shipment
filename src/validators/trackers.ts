export class Tracker {
    check(args:any){
        let required = ["carrier_tracking_no", "carrier"];
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