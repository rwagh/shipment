 export class Quotes {
    check(args:any){
        let required = ["carrier", "service", "to", "package"];
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