/**
 * Created by Administrator on 2017/9/3.
 */

//————————1.放大镜
var mask=document.getElementById("mask");
var superMask=document.getElementById("superMask");
var largeDiv=document.getElementById("largeDiv");
const MSIZE=250;const MAX=250;

superMask.onmouseover=function(){
    mask.style.display="block";
    var src="img/detail/large1.jpg";
    largeDiv.style.display="block";
    largeDiv.style.backgroundImage="url("+src+")";
};
superMask.onmouseout=function(){
    mask.style.display="none";
    largeDiv.style.display="none";
};
superMask.onmousemove=function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var left=x-MSIZE/2;
    var top=y-MSIZE/2;
    if(left<0){left=0;}else if(left>MAX){left=MAX;}
    if(top<0){top=0;}else if(top>MAX){top=MAX;}
    mask.style.left=left+"px";
    mask.style.top=top+"px";
    largeDiv.style.display="block";
    largeDiv.style.backgroundPosition=-2*left+"px "+ -2*top+"px";
};

//----------------2.按钮控制数量加减部分
var count=document.getElementById("count");
var add=document.getElementById("add");
var minus=document.getElementById("minus");
add.onclick=function(){
    var c=count.innerHTML;
    c++;
    count.innerHTML=c;
};
minus.onclick=function(){
    var c=count.innerHTML;
    if(c>0){
        c--;
        count.innerHTML=c;
    }
};

//----------------3.收货地址2级联动下拉菜单
var address=[];
address["北京市"]=["朝阳区","海淀区","东城区","西城区","丰台区","通州区"];
address["天津市"]=["河北区","南开区","红桥区","河西区","西青区"];
address["武汉市"]=["江岸区","武昌区","汉阳区","洪山区","江汉区","青山区","江夏区","黄陂区"];
var city=document.getElementById("cities");
var choseAddr=document.getElementById("choseAddr");
var showAddr=document.getElementById("showAddr");
city.style.cssText="verticalAlign:top;color:#78a000;marginRight:20px";

city.innerHTML=`<option>--请选择城市--</option>`;
for(var key in address){
    city.innerHTML+=`<option>${key}</option>`;
}

var states=document.createElement("select");
states.style.cssText="verticalAlign:top;color:#78a000";
states.innerHTML="<option>--请选择区域--</option>";
city.onchange=function(){
    var state=city.value;
    showAddr.innerHTML="请选择详细收货地址！"
    if(state!='--请选择城市--'){
        states.innerHTML="<option>--请选择区域--</option>";
        for(var i=0;i<address[state].length;i++){
            states.innerHTML+=`<option>${address[state][i]}</option>`;
        }
    }else{
        states.innerHTML="<option>--请选择区域--</option>";
    }
};
choseAddr.appendChild(states);

states.onchange=function(){
    showAddr.innerHTML="";
    if(city.value==="--请选择城市--"||states.value==="--请选择区域--"){
        showAddr.innerHTML="请选择详细收货地址！"
    }else{
        showAddr.innerHTML=`您已选择配送至：`+`${city.value} `+`${states.value} `
    }
};


