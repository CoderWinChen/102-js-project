let data = {
    name: '张三',
    age: 23,
    gender: '男',
}

let htmlStr = template_fn('demo-tpl', data);
document.querySelector('.container').append(htmlStr)
function template_fn(idName, data) {
    let tem = document.getElementById(idName).innerHTML;

    let reg = /{{\s*([a-zA-Z]+)\s*}}/;
    let result = reg.exec(tem)

    while (result = reg.exec(tem)){
        tem = tem.replace(result[0],result[1])
    }
    console.log(tem);
}