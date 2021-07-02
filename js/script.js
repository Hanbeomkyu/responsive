$( "#familySite" ).selectmenu();
$('.m_select').hide();
$('.m_menu_close').hide();
$('.m_menu').on('click',function(){
    $('.m_select').show().stop().animate({'left':'0'},500);
    $('.m_menu_close').show().stop().animate({'left':'200px'},500);
});
$('.m_menu_close').on('click',function(){
    $('.m_select').animate({'left':'-300px'},500).hide();
    $(this).animate({'left':'-100px'},500).hide();
});

var rolling=$('.rollingBg>li'),
    rollingBg=$('.rollingBg'),
    rollingBox=$('.rollingBox>li'),
    rollingBtn=$('.rollingBtn>li');

rollingBtn.on('click',function(){
    rollingBtn.find('a').removeClass('active');
    var i=$(this).index();
    //console.log(i);
    $(this).find('a').addClass('active');
    rollingBox.removeClass('active');
    $(this).parent('.rollingBtn').siblings('.rollingBox').children('li').eq(i).addClass('active');
    rolling.removeClass('active');
    $(this).parents('.rollingBoxArea').siblings('.rollingBg').children('li').eq(i).addClass('active');
   
   
   
    return false;
    
});

var menu=$('.m_sect'),
   sub=$('.m_twoD');
    
    
menu.on('click',function(){
   
   var twoD=$(this).find('.m_twoD');
   sub.hide();
   if(twoD.is(':visible')){   
      twoD.slideUp();
   }else{
      twoD.slideDown();
   }
});
//날씨
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=90dda4a9ad533db48bad866d3d27fbea&units=metric', function(data){
                var $minTemp=data.main.temp_min;
                var $maxTemp=data.main.temp_max;
                var $temp=data.main.temp;
                var $icon=data.weather[0].icon;
                var $now=new Date();
                var week=new Array("일","월","화","수","목","금","토");
                var dayName=week[$now.getDay()];
                var $cDate=$now.getFullYear() + '/' +($now.getMonth() +1) + '/' + $now.getDate() + '/' + dayName + '요일'; 
                //console.log($minTemp);

                $('.w-tit').prepend($cDate);
                $('.clowtemp').append($minTemp);
                $('.ctemp').append($temp);
                $('.chightemp').append($maxTemp);
                $('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$icon+'@2x.png" alt="날씨">');
                
            });