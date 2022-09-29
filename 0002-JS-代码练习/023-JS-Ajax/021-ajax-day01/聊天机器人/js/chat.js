$(function () {

    $('#ipt_btn').on('click', function () {
        let text = $('#ipt_input').val().trim()
        if (text === '') {
            return alert('输入内容不能为空')
        }

        $('.talk_list').append(`
            <li class="right_word">
                <img src="img/person02.png" /> <span>${text}</span>
            </li>
        `)

        $('#ipt_input').val("")

        // 初始化右侧滚动条
        // 这个方法定义在scroll.js中
        resetui()

        // 发送请求后端数据
        getMsg(text)

    })

    $('#ipt_input').on('keyup',function(e){
        if (e.key === 'Enter') {
            $('#ipt_btn').click();
        }
    })

    // 向服务器发送请求获取机器人的回复内容，渲染到页面中
    function getMsg(text) {
        $.ajax(
            {
                method: 'POST',
                dataType: 'jsonp',
                jsonp: "callback",
                contentType: 'text/html; charset=utf-8',
                url: 'http://www.weilaitec.com/cigirlrobot.cgr',
                data: {
                    key: 'KCZPECOJKBG5GYTUQPXZ334RBDU4TLUBX6GV2J9EKP8S5BZSWR',
                    appid: '1658906155650',
                    userid: 'SengJack',
                    ip: 'wulin-studio',
                    msg: text
                },
                success: function (res) {
                    // console.log(res);
                    if (res.status === 200) {
                        $('.talk_list').append(`
                             <li class="left_word">
                                <img src="img/person01.png" /> <span>${res.text}</span>
                             </li>
                `)
                        resetui()

                        getVideo(res.text);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            }
        )
    }


    // 将文本转换为语音
    function getVideo(text) {
        $.ajax({
            type: 'GET',
            url: 'http://ajax.frontend.itheima.net:3006/api/synthesize',
            data: {
                text: text
            },
            success: function(res){
                if (res.status == 200){
                    $('video').src = res.voiceUrl;
                }
                console.log(res);
            },
            error: function(error){
                console.log(error);
            }
        })
    }

})