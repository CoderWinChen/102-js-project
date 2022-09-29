function test_template(IdName,data){
    let htmlStr = document.getElementById(IdName).innerHTML;
    let reg = /{{\s*([a-zA-Z]+)\s*}}/
    let result = null;
    while(result = reg.exec(htmlStr)){
        htmlStr = htmlStr.replace(result[0],data[result[1]])
    }
    console.log(htmlStr);
    return htmlStr;
}