import thenFs from 'then-fs';
// await和async用来简化异步操作的

async function getFile() {
    // await修饰在Promise操作前，async修饰在方法前
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt','utf8')
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt','utf8')
    console.log(r3);
}

getFile()