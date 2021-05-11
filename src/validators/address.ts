export class Address {
    check(args:any){
        let required = ["first_name", "last_name", "street", "street_no", "city", "zip_code", "country"];
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