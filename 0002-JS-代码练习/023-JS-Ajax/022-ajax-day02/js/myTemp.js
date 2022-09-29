function template(idName,data){
    let htmlStr = document.querySelector(`#${idName}`).innerHTML;
    let reg = /{{\s*([a-zA-Z]+)\s*}}/

    let obj = null
    // obj = reg.exec(htmlStr)
    while(obj = reg.exec(htmlStr)){
        htmlStr = htmlStr.replace(obj[0], data[obj[1]])
    }
    console.log(htmlStr);
}