/**
 * Created by Administrator on 2017/9/6.
 */
//-------------------1.左侧边栏菜单切换功能
var listText=document.querySelectorAll(".listText");
listText[1].nextElementSibling.style.display="block";
for(var i=0;i<listText.length;i++){
    listText[i].onclick=function(){
        for(var r=0;r<listText.length;r++){
            if(listText[r].nextElementSibling.style.display==="block"){
                listText[r].nextElementSibling.style.display="none";
            }
        }
        this.nextElementSibling.style.display="block";
    }
}