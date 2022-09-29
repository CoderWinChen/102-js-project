import thenFs from 'then-fs';
thenFs.readFile('./files/11.txt','utf8')
// .catch(err=>{
//     console.log('r1=>',err.message);
// })
.then((r1)=>{  
    console.log(r1);
    return thenFs.readFile('./files/2.txt','utf8')
})
// .catch(err=>{
//     console.log('r2=>',err.message);
// })
.then((r2)=>{
    console.log(r2);
    return thenFs.readFile('./files/3.txt','utf8')
})
.catch(err=>{
    console.log('r3=>',err.message);
})
.then(r3=>{
    console.log(r3);
})