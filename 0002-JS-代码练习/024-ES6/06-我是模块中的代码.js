const object = {
    username: '张三',
    age: 23,
    gender: '男'
}
for (const key in object) {
    console.log(`${key}-->${object[key]}`);
}