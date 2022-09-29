// 需求：按照顺序读取1.txt、2.txt、3.txt这三个文件
import thenFs from 'then-fs'
thenFs.readFile("./files/1.txt","utf-8").then((res1=>{console.log(res1);}))
thenFs.readFile("./files/2.txt","utf-8").then((res2=>{console.log(res2);}))
thenFs.readFile("./files/3.txt","utf-8").then((res3=>{console.log(res3);}))
// 异步读取，没有顺序之分