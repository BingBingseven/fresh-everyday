$(()=>{
    //图片的路径数组
    imgs=[
        "img/banner1.jpg",
        "img/banner2.jpg",
        "img/banner3.jpg",
        "img/banner4.jpg",
        "img/banner5.jpg"
    ];
    //声明常量和变量
    const WIDTH=window.screen.width,
          INTERVAL=800,
          WAIT=3000;
    var $ulImgs=$("#slide_img"),
        $ulList=$("#index_list");
    //生成图片内容，设置移动元素的宽度
    $ulImgs.html(
        `<li><a href="#"><img src="${imgs.join('"></a></li><li><a href="#"><img src="')}"></a></li>`+
            `<li><a href="#"><img src="${imgs[0]}"></a></li>`
    ).css("width",WIDTH*(imgs.length+1));
    //生成下标，设置第一个下标的样式
    var str="";
    for(var i=0;i<imgs.length;i++){
        str+="<li></li>";
    }
    $ulList.html(str).children(":first").addClass("hover");
    //声明动画中的变量
    var moved=0,
        canMove=true,
        timer=null;
    //声明动画周期函数
    function move(){
        if(canMove){
            moved++;
            timer=setTimeout(()=>{
                $ulImgs.animate({left:-WIDTH*moved},INTERVAL,()=>{
                    if(moved<imgs.length){
                        $ulList.children(`:eq(${moved})`).addClass("hover").siblings().removeClass("hover");
                    }else{
                        moved=0;
                        $ulImgs.css("left",0);
                        $ulList.children(":first").addClass("hover").siblings().removeClass("hover");
                    }
                    move();
                })
            },WAIT);
        }
    }
    //调用函数
    move();
    //鼠标悬停图片动画事件
    $("#banner").hover(
        ()=>{
            clearTimeout(timer);
            canMove=false;
    },
        ()=>{
            canMove=true;
            timer=null;
            move();
        });
    //鼠标悬停下标事件
    $ulList.on(
        "mouseover","li",e=>{
            var $li=$(e.target);
            moved=$li.index();
            $ulImgs.stop(true).animate({left:-WIDTH*moved},INTERVAL);
            $li.addClass("hover").siblings().removeClass("hover");
        }
    )
})
