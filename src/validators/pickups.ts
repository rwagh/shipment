export class Pickups {
    check(args:any){
        let required = ["pickup_time", "carrier"];
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