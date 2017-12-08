sumPrice();
//删除功能
$("tbody a").click(function(e){
    if(e&&e.preventDefault()){
        e.preventDefault();
    }else{
        window.event.returnValue = false;
    };
    var a=confirm("您确定将该商品从购物车中移除吗？");
    if(a){
        $(e.target).parent().parent().remove();
    }else{
        return;
    }
});

//+-按钮功能
$("tbody button.sub").click(function(e){
    e.preventDefault();
    var price=$(e.target).parent().prev().html();
    var count=$(e.target).next().html();
    if(count>=1){
        count--;
        $(e.target).next().html(count);
        var sum=count*price;
        $(e.target).parent().next().html(`&yen;${sum.toFixed(2)}`);
    }
    sumPrice();
});
$("tbody button.plus").click(function(e){
    e.preventDefault();
    var price=$(e.target).parent().prev().html();
    var count=$(e.target).prev().html();
    count++;
    $(e.target).prev().html(count);
    var sum=count*price;
    $(e.target).parent().next().html(`&yen;${sum.toFixed(2)}`);
    sumPrice();
});

//选择按钮功能
var topCheck=$("thead input");
var isTop=topCheck.prop("checked");
var checks=$("tbody input");
var footCheck=$("tfoot input");
var isFoot=footCheck.prop("checked");
checks.click(count);
topCheck.click(function(){
    if(isTop==true){
        checks.prop("checked",false);
        isTop=false;
    }else if(isTop==false){
        checks.prop("checked",true);
        isTop=true;
    }
    count();
});
footCheck.click(function(){
    if(isFoot==true){
        checks.prop("checked",false);
        isFoot=false;
    }else if(isFoot==false){
        checks.prop("checked",true);
        isFoot=true;
    }
    count();
});
   //结算总计
function count(){
    var tCount=0;
    var tPrice=[];
    for(var i=0;i<checks.length;i++){
        if($(checks[i]).prop("checked")==true){
            var p=parseFloat($(checks[i]).parent().siblings(".sum").html().slice(1));
            tCount++;
            tPrice.push(p);
        }
    };
    var sPrice=0;
    for(var j=0;j<tPrice.length;j++){
        sPrice+=tPrice[j];
    }
    $("section>div>span>b").first().html(tCount);
    $("section>div>span>b").last().html(sPrice.toFixed(2));
}
     //固定总计
function sumPrice(){
    var sp=0;
    var tr=$("tbody td.sum");
    for(var r=0;r<tr.length;r++){
       var dp=parseFloat($(tr[r]).html().slice(1));
        sp+=dp;
    };
    $("#tPrice").html(`&yen;${sp.toFixed(2)}`);
}



