import thenFs from 'then-fs'
// 3个异步操作，没有先后顺序之分
const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]

// 所有异步操作执行完毕才会执行这个方法
Promise.all(promiseArr)
    // Promise.all拿到的值和数组中异步操作的顺序一致，也就是数组读取的是1，2，3，拿到的结果就是1，2，3
    .then(result => {
        console.log(result);
    })
