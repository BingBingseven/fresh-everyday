/**
 * Created by Administrator on 2017/9/11.
 */
//����֤

var userName=document.getElementById("uname");
var userPwd=document.getElementById("upwd");
var userPhone=document.getElementById("uphone");
var userMail=document.getElementById("umail");
var nameReg=/^[a-zA-Z0-9]{3,6}$/;
var pwdReg=/^\d{6,12}$/;
var phoneReg=/^1[3578]\d{9}$/;
var mailReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
var suc=`url('img/icon.sprites.png') -8px -200px`;
var err=`url('img/icon.sprites.png') -32px -200px`;
userName.onblur=function(){
    if(nameReg.test(userName.value)===true){
        userName.nextElementSibling.style.background=suc;
    }else{
        userName.nextElementSibling.style.background=err;
        userName.focus();
    }
};
userPwd.onblur=function(){
    if(pwdReg.test(userPwd.value)===true){
        userPwd.nextElementSibling.style.background=suc;
    }else{
        userPwd.nextElementSibling.style.background=err;
        userPwd.focus();
    }
};
userPhone.onblur=function(){
    if(phoneReg.test(userPhone.value)===true){
        userPhone.nextElementSibling.style.background=suc;
    }else{
        userPhone.nextElementSibling.style.background=err;
        userPhone.focus();
    }
};
userMail.onblur=function(){
    if(mailReg.test(userMail.value)===true){
        userMail.nextElementSibling.style.background=suc;
    }else{
        userMail.nextElementSibling.style.background=err;
        userMail.focus();
    }
};
//���ύ
$("#bt-register").on("click",function(){
    var uname = $("#uname").val();
    var upwd = $("#upwd").val();
    var umail = $("#umail").val();
    var uphone = $("#uphone").val();
    $.ajax({
        url:'/myRegister',
        type:'get',
        data:{uname:uname,
              upwd:upwd,
              uphone:uphone,
              umail:umail
        },
        success:function(data){
            if(data.code>0){
                $("#register").html("注册成功！");
            }
        },
        error:function(){
            $("#register").html("注册失败");
        }
    })
});
