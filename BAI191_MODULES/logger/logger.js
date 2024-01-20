import { Type_log , Type_err, Type_warn} from '../constants.js'

function logger(log, type=Type_log){
    console[type](log)
}

export default logger;// dẩy ra default  export default duy nhất được một cái đó thôi 








