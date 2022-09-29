import thenFs from 'then-fs'

// 注意：awiat修饰的都是异步任务，事件循环的执行方式
async function getFile() {
    console.log('A'); //同步任务
    console.log('B'); //同步任务
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8') //异步任务
    console.log(r1); //异步任务

    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')//异步任务
    console.log(r2);//异步任务

    const r3 = await thenFs.readFile('./files/3.txt', 'utf8')//异步任务
    console.log(r3);//异步任务
    console.log('D'); //异步任务
}
getFile()
console.log('C');//同步任务

// A B C 111 222 333 D

