export {default} from './logger.js'// dùng một modules khác để export một module khác ra ngoài 
export {default as logger2} from './logger.js'// dùng kiểu n ày là export luôn hàm ra ngoài 

// cách 2 
// import logger  from './logger.js'
// export default logger

//=> như mình đã nói thì không thể export default 2 lần trong một module