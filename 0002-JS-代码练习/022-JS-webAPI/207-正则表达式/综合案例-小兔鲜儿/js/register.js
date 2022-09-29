// 需求一：获取验证码
;(function(){
    let name_input = document.querySelector('input[name="username"]');
    let name_msg = name_input.nextElementSibling;

    let phone_input = document.querySelector('input[name="phone"]');
    let phone_msg = phone_input.nextElementSibling;

    let pwd_input = document.querySelector('input[name="password"]');
    let pwd_msg = pwd_input.nextElementSibling;

    let code_input = document.querySelector('input[name="code"]');
    let code_msg = code_input.nextElementSibling;
    let code_btn = document.querySelector('.code');

    let confirm_input = document.querySelector('input[name="confirm"]');
    let confirm_msg = confirm_input.nextElementSibling;
    
    // 确认图标
    let confirm_icon = document.querySelector('.iconfont.icon-queren')

    let form = document.querySelector('form')

    let second = 5;
    // 需求一：获取验证码
    code_btn.addEventListener('click',function(){
        this.innerHTML = `05秒后重新获取`
        let timer = setInterval(time,1000);
        function time() {
            code_btn.innerHTML = `0${--second}秒后重新获取`;
            if (second == 0) {
                code_btn.innerHTML = `发送验证码`
                clearInterval(timer)
            }
        }
    })

    // 需求二：表单验证-用户名验证
    name_input.addEventListener('change',verifyUserName)
    // 需求三：表单验证-手机号验证
    phone_input.addEventListener('change',verifyPhone)

    // 需求四：表单验证-验证码验证
    code_input.addEventListener('change',verifyCode)
    // 需求五：表单验证-密码验证
    pwd_input.addEventListener('change', verifyPwd)

    confirm_input.addEventListener('change', verifyConfirm)

    // 点击同意图标
    confirm_icon.addEventListener('click', function () {        
        confirm_icon.classList.toggle('icon-queren2');
    })

    //表单提交，验证所有都为true才能提交
    form.addEventListener('submit',function(e){
        if (!(verifyUserName() && verifyPhone() && verifyCode() && verifyPwd() && verifyConfirm())){
            e.preventDefault()
        }
        if (!(confirm_icon.classList.contains('icon-queren2'))){
            alert('请同意该协议')
            e.preventDefault()
        }
    })


    function verifyUserName(){
        let reg = /^[a-zA-Z0-9-_]{6,10}$/;
        if (!reg.test(name_input.value)){
            name_msg.innerHTML = `昵称长度为6到10个字符`
            return false;
        }
        else {
            name_msg.innerHTML = ''
            return true;
        }
    }

    function verifyPhone() {
        let reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
        if (!reg.test(phone_input.value)) {
            phone_msg.innerHTML = `请输入正确的手机号`
            return false;
        }
        else {
            phone_msg.innerHTML = ''
            return true;
        }
    }

    function verifyCode() {
        let reg = /^\d{6}$/;
        if (!reg.test(code_input.value)) {
            code_msg.innerHTML = `请输入正确的验证码`
            return false;
        }
        else {
            code_msg.innerHTML = ''
            return true;
        }
    }

    function verifyPwd() {
        let reg = /^[a-zA-Z0-9-_]{6,20}$/;
        if (!reg.test(pwd_input.value)) {
            pwd_msg.innerHTML = `设置6至20位字母、数字和符号组合`
            return false;
        }
        else {
            pwd_msg.innerHTML = ''
            return true;
        }
    }

    function verifyConfirm() {
        
        if (confirm_input.value !== pwd_input.value) {
            confirm_msg.innerHTML = `两次输入的密码不一致`
            return false;
        }
        else {
            confirm_msg.innerHTML = ''
            return true;
        }
    }


  
}())
