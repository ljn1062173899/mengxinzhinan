//固定导航
$('.fixed .btn').click(function(){
    $('.open').css('display','block');
    $('.fixed').animate({right:-370},200);
})
$('.open').click(function(){
    $('.open').css('display','none');
    $('.fixed').animate({right:-60},200);
})

var h=$('.android').offset().top;
$(window).scroll(function(){
    var h2=$(window).scrollTop();
    if(h2>=h){
        $('.fixed').css('display','block');
    }else{
        $('.fixed').css('display','none');
    }
    if(h2>=$('.android').offset().top){
        $('.link1').addClass('change').siblings().removeClass('change');
    }
    if(h2>=$('.game-interface').offset().top){
        $('.link2').addClass('change').siblings().removeClass('change');
    }
    if(h2>=$('.system').offset().top){
        $('.link3').addClass('change').siblings().removeClass('change');
    }
    if(h2>=$('.map').offset().top){
        $('.link5').addClass('change').siblings().removeClass('change');
    }
    if(h2>=$('.term').offset().top){
        $('.link6').addClass('change').siblings().removeClass('change');
    }

})


$('.fixed-bottom').on('click','a',function(){
    var index=$(this).index();
    console.log(index);
    if(index==3){
        return;
    }
    if(index==4){
        index=3;
    }
    if(index==5){
        index=4;
    }
   
    var v=$('.part .publicpart').eq(index).offset().top;
    $('html,body').animate({scrollTop:v},500);
})


//顶部
$('.top .left').mouseenter(function(){
    
    $('.top .smallleft').css('opacity','0').next().css('display','block');
})
$('.top .left').mouseleave(function(){
    
    $('.top .smallleft').css('opacity','1').next().css('display','none');
})

var number=0;
var height=$('.ani a').height();
function show(){
    if(number==0){
        $('.ani').css('top',0);
    }
    number++;
    var h=-number*height;
    $('.ani').animate({top:h},1000);
    if(number==1){
        number=0;
    }
}
setInterval(show,5000);

$('.top .top-left').mouseenter(function(){
   $('.box').stop().slideDown(200,'linear');
})
$('.top .top-left').mouseleave(function(){
    $('.box').stop().slideUp(200,'linear');
})


//游戏介绍
$('.info-ul').on('click','li',function(){
    
    var index=$(this).index();
   
    if(index==0){
        $(this).addClass('active').siblings().removeClass();
        
        $(this).parent().parent().parent().find('.content1').css('display','block').siblings().css('display','none');
    }
    if(index==2){
        $(this).addClass('active').siblings().removeClass();
        
        $(this).parent().parent().parent().find('.content2').css('display','block').siblings().css('display','none');
    }
    if(index==4){
        $(this).addClass('active').siblings().removeClass();
        
        $(this).parent().parent().parent().find('.content3').css('display','block').siblings().css('display','none');
    }
})



//游戏介绍轮播图
var num=0;
var width=$('.img li').width();
function move(){
    if(num==0){
        $('.img').css('left',0);
    }
    num++;
    var s = -num * width;
    // $('.img').css('transform','translateX('+s+'px)');
    // $('.img').css('transition','0.2s');
    $('.img').animate({left: s}, 1000);
    
    if(num==5){
        num=0;
        // $('.img').animate({left: '0'}, 0);
    }
   if(num==4){
       $('.dian li:last-child').css('width',20);
   }
    $('.dian li').eq(num).addClass('style').siblings().removeClass('style');
    
}
var timer=setInterval(move,5000);
$('.img li').mouseenter(function(){
    clearInterval(timer);
})
$('.img li').mouseleave(function(){
    timer=setInterval(move,5000);
})

//轮播图点击点
$('.dian li').click(function(){
    
    var index=$(this).index();
    num=index;
    var s = -num * width;
    $('.img').animate({left: s}, 1000);
    if(num==4){
        $('.dian li:last-child').css('width',20);
    }
    $(this).addClass('style').siblings().removeClass('style');

})




//游戏界面
$('.interface-ul').on('click','li',function(){
    
    var index=$(this).index();
   
    if(index==0){

        $(this).addClass('info').siblings().removeClass();
        $(this).parent().parent().parent().find('.content1').css('display','block').siblings().css('display','none');
    }
    if(index==2){
        $(this).addClass('info').siblings().removeClass();
       
        $(this).parent().parent().parent().find('.content2').css('display','block').siblings().css('display','none');
    }
   
})


//视频
$('.videobtn').click(function(){
    
    $('.shizhanvideo').show();
    $('.shizhanvideo video').trigger('load');
    $('.shizhanvideo video').trigger('play');
})
$('.shizhanvideo a').click(function(){
    $('.shizhanvideo').hide();
    $('.shizhanvideo video').trigger('pause');
})

//游戏界面内容
//游戏界面
$('.game-interface .content1').on('mouseenter','div',function(){
    $(this).children('p').css('display','block');
})
$('.game-interface .content1').on('mouseleave','div',function(){
    $(this).children('p').css('display','none');
})

//战斗界面
$('.game-interface .content2').on('mouseenter','div',function(){
    $(this).children('p').css('display','block');
})
$('.game-interface .content2').on('mouseleave','div',function(){
    $(this).children('p').css('display','none');
})

//游戏系统
$('.system-ul').on('click','li',function(){
    
    var index=$(this).index();
   
    if(index==0){
        $(this).addClass('system').siblings().removeClass();
        
        $(this).parent().parent().parent().find('.content1').css('display','block').siblings().css('display','none');
    }
    if(index==2){
        $(this).addClass('system').siblings().removeClass();
        
        $(this).parent().parent().parent().find('.content2').css('display','block').siblings().css('display','none');
    }
    if(index==4){
        $(this).addClass('system').siblings().removeClass();
        
        $(this).parent().parent().parent().find('.content3').css('display','block').siblings().css('display','none');
    }
})

//地图野分布
$('.map .content').on('mouseenter','div',function(){
    $(this).children('p').css('display','block');
})
$('.map .content').on('mouseleave','div',function(){
    $(this).children('p').css('display','none');
})


//平安京术语
$('.term .content').on('click','a',function(){
    var index=$(this).index();
    $(this).addClass('term').siblings().removeClass('term');
   
    $('.middle-img div').eq(index).addClass('show').siblings().removeClass('show');
})

//点击按钮
var flag=true;

$('.btn-down').click(function(){
    if(flag){
        $(this).animate({top:460},500);
        $(this).addClass('btn-up');
        $('.term .public').css('display','block');
        flag=false;
    }else{
        $(this).animate({top:418},500);
        $(this).removeClass('btn-up');
        $('.term .public').css('display','none');
        flag=true;
    }
    
})



 

