function mytemplate(idName,data){
    let template = document.querySelector(`#${idName}`).text;
    let reg = /{{\s*([a-zA-Z]+)\s*}}/
    let result = null;
    while (result = reg.exec(template)){
        template = template.replace(result[0], data[result[1]])
    }
    console.log(template);
    return template;
}