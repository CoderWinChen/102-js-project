$(function () {
    // 输入框防抖
    let timer = 0; //延时器函数id

    // 使用一个新的对象，保存请求过的数据，如果遇到相同的关键字
    // 则不用发请求，直接在这个缓存对象中拿
    let CacheObj = {} //定义全局缓存对象

    function debounceSearch(kw){
        timer = setTimeout(()=>{
            getSuggestList(kw)  //500毫秒后调用请求
        },500)
    }
    
    $('#search-input').on('keyup', function () {
        let kw = $(this).val().trim();
        if (kw.length <= 0) {
            return $('#suggest-list').empty().hide()
        }
        // 每次输入都会取消请求
        clearTimeout(timer);
        console.log(CacheObj[kw]);
        // 最后一次没有输入则会发起请求
        if (CacheObj[kw]) {
            return renderUI(CacheObj[kw])
        }
        debounceSearch(kw)
    })


    function getSuggestList(kw) {
        $.ajax({
            method: 'GET',
            dataType: 'jsonp',
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            success: function (res) {
                CacheObj[kw] = res
                renderUI(res)
            }
        })
    }

    function renderUI(data) {
        // 如果数据为空，不用渲染
        if (data.result.length <= 0) {
            return $('#suggest-list').empty().hide()
        }
        let htmlStr = template('tpl-suggest', data)
        $('#suggest-list').html(htmlStr).show()
    }
})