$(()=>{
    //ͼƬ��·������
    imgs=[
        "img/banner1.jpg",
        "img/banner2.jpg",
        "img/banner3.jpg",
        "img/banner4.jpg",
        "img/banner5.jpg"
    ];
    //���������ͱ���
    const WIDTH=window.screen.width,
          INTERVAL=800,
          WAIT=3000;
    var $ulImgs=$("#slide_img"),
        $ulList=$("#index_list");
    //����ͼƬ���ݣ������ƶ�Ԫ�صĿ��
    $ulImgs.html(
        `<li><a href="#"><img src="${imgs.join('"></a></li><li><a href="#"><img src="')}"></a></li>`+
            `<li><a href="#"><img src="${imgs[0]}"></a></li>`
    ).css("width",WIDTH*(imgs.length+1));
    //�����±꣬���õ�һ���±����ʽ
    var str="";
    for(var i=0;i<imgs.length;i++){
        str+="<li></li>";
    }
    $ulList.html(str).children(":first").addClass("hover");
    //���������еı���
    var moved=0,
        canMove=true,
        timer=null;
    //�����������ں���
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
    //���ú���
    move();
    //�����ͣͼƬ�����¼�
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
    //�����ͣ�±��¼�
    $ulList.on(
        "mouseover","li",e=>{
            var $li=$(e.target);
            moved=$li.index();
            $ulImgs.stop(true).animate({left:-WIDTH*moved},INTERVAL);
            $li.addClass("hover").siblings().removeClass("hover");
        }
    )
})
