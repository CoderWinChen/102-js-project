import mysql from 'mysql2';
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'test_node',
    user: 'root',
    password: 'root'
})

export default pool.promise() //导出一个带有promise方法的mysql数据库连接池