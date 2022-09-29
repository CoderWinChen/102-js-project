$(function () {
    // let arr = [];

    // 给事件补零的函数
    function formatZero(str) {
        if (str < 10) {
            return '0' + str
        }
        return str
    }
    // 过滤器函数
    template.defaults.imports.filterDate = function (date) {
        date = new Date()
        let year = formatZero(date.getFullYear())
        let month = formatZero(date.getMonth() + 1)
        let day = formatZero(date.getDate())
        let hours = formatZero(date.getHours())
        let minutes = formatZero(date.getMinutes())
        let second = formatZero(date.getSeconds())



        return `${year}年${month}月${day}日 ${hours}:${minutes}:${second}`
    }


    getNewsData();
    // setTimeout(()=>{
    //     console.log(arr);
    // },3000)
    // let htmlStr = template('tpl', data);
    // $('#news-list').html(htmlStr)



    function getNewsData() {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function (res) {
                if (res.status !== 200) {
                    return alert('新闻列表数据获取失败')
                }
                // $.each(res.data,function(i,item){
                //     arr.push(item)
                // })
                // return res.data;

                // 处理tags数据
                $.each(res.data, function (i, item) {
                    item.tags = (item.tags).split(',');
                })


                let htmlStr = template('tpl', res);
                $('#news-list').html(htmlStr)
            },
            error: function (err) {
                console.log(err);
            }
        })
    }



})

