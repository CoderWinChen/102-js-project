// 封装自定义ajax函数
function myAjax(options) {
    let xhr = new XMLHttpRequest();
    // xhr.open('GET','http://localhost:9000/getAllBooks')
    let result = splicing_data(options.data);

    console.log('-----');
    console.log(options);
    console.log(result);
    // 如果参数的method是GET，则发送GET请求
    if (options.method.toUpperCase() == 'GET') {
        xhr.open(options.method, options.url + '?' + result);
        xhr.send();
    }
    else if (options.method.toUpperCase() == 'POST') {
        xhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(result);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let obj = xhr.responseText;
            return options.success(obj);
        }
    }

}

let arr = []

// 将data对象以查询字符串的方式进行拼接
function splicing_data(data) {
    for (const key in data) {
        arr.push(key + '=' + data[key])
    }
    return arr.join('&');
}