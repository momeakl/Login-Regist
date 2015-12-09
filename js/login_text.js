window.onload=function(){
    var aInput = document.getElementsByTagName('input');
    var oName = aInput[0];
    var psw = aInput[1];
    var login = aInput[2];
    var aP = document.getElementsByTagName('p');
    var oName_msg = aP[0];
    var psw_msg = aP[1];

    //用户名
     oName.onfocus=function(){
        oName_msg.style.display="block";
        oName_msg.innerHTML='<i class="icon-info"></i>请输入一个可用的邮箱';
    }
     oName.onblur=function(){
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        oName_msg.innerHTML="";
        if(this.value==""){
            oName_msg.innerHTML='<i class="icon-cross"></i>不能为空';
        }
        else if(!re.test(this.value)){
            oName_msg.innerHTML='<i class="icon-cross"></i>邮箱格式不正确';
        }
        else{
            oName_msg.innerHTML='<i class="icon-checkmark"></i>OK'
        }
    }
     
     //密码验证
    psw.onfocus=function(){
        psw_msg.style.display="block";
        psw_msg.innerHTML='<i class="icon-info"></i>请输入6-16个字符长度的密码';
    }
    psw.onblur=function(){
        psw_msg.innerHTML="";
        if(this.value==""){
            psw_msg.innerHTML='<i class="icon-cross"></i>不能为空';
        }
     
     
     
    }
    
}