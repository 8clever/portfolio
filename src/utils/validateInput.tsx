import _ from "lodash";

interface ValidateInputOptions {
    isNumber?: boolean;
    toFixed?: number;
    minValue?: number;
    maxValue?: number;
}

export function validateInput (v: string, options: ValidateInputOptions = {}) {
    let value = v || "";

    if (options.isNumber) {
        let regex = "(-|)(0|[0-9]*)";
        if (options.toFixed) {
            options.toFixed = options.toFixed || 2;
            let n = 0;
            let rgx = "";
            while (n <= options.toFixed) {
                rgx = `${regex}[,.][0-9]{${n}}${rgx ? "|" + rgx : ""}`;
                n++;
            }
            regex = rgx + "|" + regex;
        }
        
        let match = value.match(new RegExp(regex));
        value = match ? match[0] : "";
        
        if (options.minValue) {
            if (_.isFinite(options.minValue) && parseFloat(value) < options.minValue) {
                value = options.minValue.toString();
            }
        }
        if (options.maxValue) {
            if (_.isFinite(options.maxValue) && parseFloat(value) > options.maxValue) {
                value = options.maxValue.toString();
            }
        }
    }
    
    return value;
}
