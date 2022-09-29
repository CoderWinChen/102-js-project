import db from '../db/index.js';
// 相当于路由处理函数
export async function getUser(req, res) {

    const sql = 'select * from ev_user'
    //拿到的是一个Promise实例，如果是使用普通的mysql，拿到的就不是Promise了
    // const rows = await db.query(sql) //使用了await和async修饰的，结果就会变为一个数组，
    try {

        const [rows] = await db.query(sql) //这里的[rows]使用了解构赋值的方法，把数组中的第一项取出来
        // console.log(rows);
        res.send({
            status: 0,
            message: '请求数据成功',
            data: rows
        })
        // 捕获异常
    } catch (error) {
        res.send({
            status: 1,
            message: '获取用户信息失败'
        })
    }
}