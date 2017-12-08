/**
 * Created by Administrator on 2017/8/7.
 */


//1-----------------------主体轮播广告部分-----------------------


    //ͼƬ����
    var imgs=[
        "img/banner1.jpg",
        "img/banner2.jpg",
        "img/banner3.jpg",
        "img/banner4.jpg",
        "img/banner5.jpg"
    ];
//����һЩ�����ͳ���

const WIDTH=1920,
    INTERVAL=800,
    WAIT=2500;
var ulImgs=document.getElementById("slide_img"),
    ulList=document.getElementById("index_list");

//���ɶ�̬ͼƬ����
ulImgs.innerHTML=
    `<li><a href="#"><img src="${imgs.join('"> </a> </li><li><a href="#"><img src="')}"></a></li>`;
ulImgs.innerHTML+=`<li><a href="#"><img src="${imgs[0]}"></a></li>`;
//ulImgs.style.width=WIDTH * (imgs.length+1);
$("#slide_img").css("width",WIDTH * (imgs.length+1));
$("#slide_img>li>a>img").css("width",WIDTH);

//���ɶ�̬����
var str="";
for(var i=1;i<=imgs.length;i++){
    str+= `<li></li>`
}
ulList.innerHTML=str;
$("#index_list").children(":first").addClass("hover");

//�����ƶ�����
var canMove=true,
    timer=null,
    moved=0;
//�����ƶ�����move
function move(){
    if(canMove){
       timer=setTimeout(()=>{
               moved++;
               $("#slide_img").animate({left:-WIDTH * moved },INTERVAL,()=>{
                   if(moved<imgs.length){
                       $("#index_list").children(`:eq(${moved})`).addClass("hover").siblings().removeClass("hover");
                   }else{
                       moved=0;
                       $("#slide_img").css("left",0);
                       $("#index_list").children(":first").addClass("hover").siblings().removeClass("hover");
                   }
                   move();
               })
       }, WAIT);
    }
};
move();
//�����ͣʱ��
$("#banner").hover(
    ()=>{
        clearTimeout(timer);
        canMove=false;
        timer=null;
    },
    ()=>{
        canMove=true;
        move();
    }
);
$("#index_list").on("mouseover","li",e=>{
    var $li=$(e.target);
    moved=$li.index();
    $("#slide_img").stop(true).animate({
        left:-WIDTH*moved
    },INTERVAL);
    $li.addClass("hover").siblings().removeClass("hover");
});

//2-----------------------------热卖商品切换部分----------------------------

 $("#hot_sell>#hot_list>li").mouseover(function(e){
        e.preventDefault();
        $(e.target).addClass("hover_list").siblings().removeClass("hover_list");
       var i=$(e.target).index();
     $("#hot_sell>ul").eq(i+1).addClass("hover_sell").siblings().removeClass("hover_sell")
    });

//3-----------------------------页面主体商品切换部分----------------------------
$(".aside_ad~li>a").mouseover(function(e) {
    e.preventDefault();
    var r = $(e.target).parent().index();
    $(e.target).parent().addClass("hover_main").siblings().removeClass("hover_main");
    $(e.target).parent().parent().nextAll().eq(r-1).addClass("hover_ad").siblings().removeClass("hover_ad");
});

//4----------------------------这是商品悬停过渡动画部分-0---------------------
    $div=$("ul.nav_list").nextAll().find("div");
    $div.hover(function(){
            var $p2=$(this).children().eq(2);
            $p2.empty().append("<img src=img/list_btn.png>");
    },function(){
            var $p2=$(this).children().eq(2);
            $p2.empty().append("<b>&yen;5.20</b>&nbsp;<strike>&yen;7.20</strike>");
        }
    );
//5----------------------------这是左侧楼层引导部分-0---------------------
    var $left_aside=$("#left_aside");
    var $floors=$("section>div");
    var curr_f=-1;
    $(window).scroll(()=> {
        var scrollTop =
            document.body.scrollTop;
        //获得f1元素距页面顶部的距离
        var offsetTop = $("#floor1").offset().top;
        if (innerHeight / 2 + scrollTop >= offsetTop) {
            $left_aside.show();
        } else {
            $left_aside.hide();
        }
        $floors.each((i,elem)=>{
            var offsetTop=
                $(elem).offset().top;
            if(innerHeight/2+scrollTop>=offsetTop){
                $left_aside.find(
                    `li:eq(${i})`
                ).addClass("active")
                    .siblings()
                    .removeClass("active");
                curr_f=i;
            }
        })
    });
    $left_aside.on("mouseenter","li",e=>{
        $(e.target).addClass("active");
    }).on("mouseleave","li",e=>{
        var $tar=$(e.target);
        if($tar.index()!=curr_f){
            $tar.removeClass("active");
        }
    }).on("click","li",e=>{
        var i=
            $left_aside.find("li")
                .index(e.target);
        $("body").animate({
            scrollTop:
                $floors.eq(i).offset().top
        },500);

});
