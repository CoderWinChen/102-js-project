$(function () {
    getCommendData()
    // 写法一：给提交按钮绑定事件，进行ajax处理
    // $('.btn').on('click',function(){
    //     addCommend()
    // })


    // 写法二：给表单绑定提交事件，通过serialize()方法获取数据，ajax处理
    $('form').submit(function (e) {
        e.preventDefault()
        let data = $(this).serialize();
        // ajax会自动将form表单的key=value解析为json
        $.post(
            "http://www.liulongbin.top:3006/api/addcmt",
            data,
            function (res) {
                if (res.status !== 201) {
                    return alert('评论发表失败')
                }
                getCommendData()
                // 注意转换为原生js的方法，jq转换为原生js，加上索引号当作数组
                $('form')[0].reset()
                location.reload()
            }
        )
    })

    function getCommendData() {
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            success: function (res) {
                if (res.status !== 200) {
                    return alert('数据获取失败')
                }
                console.log(res.data);

                $(res.data).each(function (i, item) {
                    console.log(i, item);
                    $('.list-group').append(
                        `
                                    <li class="list-group-item">
                                        <span class="comm_content">${item.content}</span>
                                        <span class="badge list-group-item-warning" id="comm_time">评论时间：${item.time}</span>
                                        <span class="badge list-group-item-info" id="comm_name">评论人：${item.username}</span>
                                    </li>
                            `
                    )
                })


            }, error: function (err) {
                console.log(err);
            }
        })
    }

    function addCommend() {
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data: {
                username: $('#comm_user').val(),
                content: $('#content').val()
            },
            success: function (res) {
                if (res.status !== 201) {
                    return alert('评论发表失败')
                }
                alert('发表评论成功')
                getCommendData();
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
})