function MineAjax(option){
    let xhr = new XMLHttpRequest()
    let result = operateData(option.data)
    if (option.method.toUpperCase() == 'GET'){
        xhr.open(option.method,option.url+'?'+result)
        xhr.send()
    }
    else if (option.method.toUpperCase() == 'POST') {
        xhr.open(option.method, option.url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(result)
    }

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            return option.success(xhr.responseText)
        }
    }
}

// 处理data的函数，本质是传递查询字符串
function operateData(data){
    let arr = []
    for (const key in data) {
        arr.push(key+'='+data[key])
    }
    return arr.join('&')
}