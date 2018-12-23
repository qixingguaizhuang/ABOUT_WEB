$(function () {

    //获取视图的高度，将预设的页面高度调整
    var $h = $(window).height();
    var $pgSize = $('.pageSize');
    $pgSize.css({height:$h});
    var nowScreen = 0;
    var timer = null;

    var $more = $('.more');
    $($more).click(function () { 

        $('.showMore').slideToggle(300,'swing',function(){

            $('.showMore').toggleClass('hideMore');


        });

        console.log('wosososoo');
    });




    // var $left = $('.describe').css().left;

    $('.describe').animate({left:'90px'},700);

    $(window).mousewheel(function(delta){


        clearTimeout(timer);
        timer = setTimeout(function () { 

            // 判断鼠标滚动方向，向下为 -1 向上为 1，在这里判断向下的话界面index+1
            if (delta.deltaY == -1) {
                nowScreen++;
            } else {
                nowScreen--; 
            }
            //如果页面小于 0 那么展示的就是第一页
            if (nowScreen < 0) {
                //向下滑动
                nowScreen = 0;  
            } 
            // 如果页面大于 4 ，那么页面为第五页
            if(nowScreen > 4) {
                nowScreen = 4;

                
            }
    
            $('.page_content').animate({top:-nowScreen*$h},300);
            $('.points li').eq(nowScreen).addClass('pointState').siblings().removeClass('pointState');

         },200);
    });

    //
    var $point = $('.points')
    $point.delegate('li', 'click', function() {

        // alert($(this).index());
        var indexPoint = $(this).index();
        $('.page_content').animate({top:-indexPoint*$h},300);
        $('.points li').eq(indexPoint).addClass('pointState').siblings().removeClass('pointState');
        
    });




    

    
});