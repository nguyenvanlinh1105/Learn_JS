// Modules :
// import: nạp vào 
// export : xuất ra 
// import default mặc định nhận dudocj đầu tiên và export các biên thì nằm ở phía sau 
import loggers from './logger/index.js'// import không có destrucuring thì mình hiểu là import mặc định mà cái bên kia export default  
import  { Type_log , Type_err, Type_warn} from './constants.js'
import * as constants from './constants.js'
console.log(constants)
console.log(typeof loggers)
loggers("linh nguen",Type_err)

import { logger2 } from './logger/index.js'
logger2("Linh nguyen ",Type_warn)






