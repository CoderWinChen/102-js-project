import fs from 'fs';
function getFile(fpath) {
    // resolve：表示成功的回调函数，reject表示失败的回调函数
    return new Promise((resolve, reject) => {
        fs.readFile(fpath, 'utf8', (err, result) => { //得到的是成功/失败的结果
            if (err) {
                return reject(err.message)
            }
            resolve(result)
        })
    })
}
getFile('./files/1.txt').then(r1 => {
    console.log(r1);
},
// 失败的回调函数可以写为.catch
// err => {
//     console.log(err.message);
// }
)
.catch(err=>{
    console.log(err.message);
})