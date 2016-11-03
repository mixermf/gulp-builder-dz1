$(window).on('load', function(){
  var count;
    $('.slider__fullimg').each(function(i,elem){
      $(this).attr('data-num',i);
      count = Number(i);
     
      var src = $(this).attr('src');
     
      $('.nav__left').append('<img src='+ src +' data-thumb='+ i +' class="thumb">');  
      $('.nav__right').append('<img src='+ src +' data-thumb='+ i +' class="thumb">');  
    });
  var activeTop = Number(Math.floor($('.slider__fullimg.active').attr('data-num'))),
      activeThumbLeft = 0,
      activeThumbRight = 0;

      switch (activeTop) {
        case count:
          activeThumbLeft = 0; 
          activeThumbRight = activeTop-1;
          break;
        case 0:
          activeThumbRight = count;
          activeThumbLeft = activeTop+1;
          break;
        default:
         
      }

     
  $('body').find('.nav__left .thumb[data-thumb='+activeThumbLeft+']').addClass('active');
  $('body').find('.nav__right .thumb[data-thumb='+activeThumbRight+']').addClass('active');
  changeLeftScreen();//Вызываем функцию при загрузке


//change main slide when click on left nav btn
  function leftbtnChange(){

    var numElem = $('.slider__fullimg.active').attr('data-num'); 
    $('.slider__fullimg.active').removeClass('active'); 
   
    if(numElem == count){
      numElem = 0;
    }else{
      numElem = ++numElem;
    }
    $('.slider__fullimg[data-num='+numElem+']').addClass('active'); //add .active class for main

   
  };


////change main slide when click on right nav btn
  function rightbtnChange(){
    var numElem = $('.slider__fullimg.active').attr('data-num'); 
    $('.slider__fullimg.active').removeClass('active'); 
    
    if(numElem == 0){
      numElem = count;
    }else{
      numElem = --numElem;
    }
    $('[data-num='+numElem+']').addClass('active'); //add .active class for main

   



  };


//change nav slides when click on LEFT nav btn
  function navLeftSlide(className, secondName){

    var numThumb = $('body').find('.'+className+' .thumb.active').attr('data-thumb');
    var elem = $('body').find('.'+className+' .thumb[data-thumb='+numThumb+']');
    elem.removeClass('active');
    
    if(numThumb == count){
      numThumb = 0;
    }else{
      numThumb = ++numThumb;
    }
    var newElem = $('body').find('.'+className+' .thumb[data-thumb='+numThumb+']')
    newElem.addClass('active');//add class

    var numThumb2 = $('body').find('.'+secondName+' .thumb.active').attr('data-thumb');
    var elem2 = $('body').find('.'+secondName +' .thumb.active');

    elem2.removeClass('active');
    if(numThumb2 == count){
      numThumb2 = 0;
    }else{

      numThumb2 = ++numThumb2;
    }
    var elem2New = $('body').find('.'+secondName+' .thumb[data-thumb='+numThumb2+']');
    elem2New.addClass('active');//add class


  }


//change nav slides when click on RIGHT nav btn  
   function navRightSlide(className, secondName){
   	var actNavElem = $('body').find('.'+className+' .thumb.active');//Нашли активынй элемент
    var numThumb = actNavElem.attr('data-thumb');//Нашли номер активного элемента
    actNavElem.removeClass('active');
    if(numThumb == 0){
      numThumb = count;
    }else{
      numThumb = --numThumb;
    }
   	var actNavElemNext = $('body').find('.'+className+' .thumb[data-thumb='+numThumb+']');//Нашли следующий элемент, который будет активным
    actNavElemNext.addClass('active'); //add class
  

    //Повторяем процедуру для зеркального изменения навигации
    var actNavElem2 = $('body').find('.'+secondName+' .thumb.active');
    var numThumb2 = actNavElem2.attr('data-thumb');
    actNavElem2.removeClass('active');
    if(numThumb2 == 0){
      numThumb2 = count;
    }else{
      
      numThumb2 = --numThumb2;
    }
    var actNavElemNext2 = $('body').find('.'+secondName+' .thumb[data-thumb='+numThumb2+']')
    actNavElemNext2.addClass('active');//add class


  }
  /////////////////Переключение скиллов и названий работ
  function changeLeftScreen(){
    var dataName = $('.slider__fullimg.active').attr('data-name');
    var dataSkills = $('.slider__fullimg.active').attr('data-skills');
    var dataLink = $('.slider__fullimg.active').attr('data-link');

    $('.slider__title, .slider__skills, .slider__link').html('');
    $('.slider__title').append('<h1 class="animated zoomIn">'+ dataName +'</h1>');
    $('.slider__skills').append('<div class="animated flipInX">'+ dataSkills +'</div>');
    $('.slider__link').append('<a href='+ dataLink +'><i class="icon-link icon"></i>Перейти на сайт</a>');
  }

  $('.nav__left').on('click',function(){
    leftbtnChange();
    navLeftSlide('nav__left','nav__right');
    changeLeftScreen();
  });
  $('.nav__right').on('click',function(){
    rightbtnChange();
    navRightSlide('nav__right','nav__left');
    changeLeftScreen();
  });

});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpe1xuICB2YXIgY291bnQ7XG4gICAgJCgnLnNsaWRlcl9fZnVsbGltZycpLmVhY2goZnVuY3Rpb24oaSxlbGVtKXtcbiAgICAgICQodGhpcykuYXR0cignZGF0YS1udW0nLGkpO1xuICAgICAgY291bnQgPSBOdW1iZXIoaSk7XG4gICAgIFxuICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG4gICAgIFxuICAgICAgJCgnLm5hdl9fbGVmdCcpLmFwcGVuZCgnPGltZyBzcmM9Jysgc3JjICsnIGRhdGEtdGh1bWI9JysgaSArJyBjbGFzcz1cInRodW1iXCI+Jyk7ICBcbiAgICAgICQoJy5uYXZfX3JpZ2h0JykuYXBwZW5kKCc8aW1nIHNyYz0nKyBzcmMgKycgZGF0YS10aHVtYj0nKyBpICsnIGNsYXNzPVwidGh1bWJcIj4nKTsgIFxuICAgIH0pO1xuICB2YXIgYWN0aXZlVG9wID0gTnVtYmVyKE1hdGguZmxvb3IoJCgnLnNsaWRlcl9fZnVsbGltZy5hY3RpdmUnKS5hdHRyKCdkYXRhLW51bScpKSksXG4gICAgICBhY3RpdmVUaHVtYkxlZnQgPSAwLFxuICAgICAgYWN0aXZlVGh1bWJSaWdodCA9IDA7XG5cbiAgICAgIHN3aXRjaCAoYWN0aXZlVG9wKSB7XG4gICAgICAgIGNhc2UgY291bnQ6XG4gICAgICAgICAgYWN0aXZlVGh1bWJMZWZ0ID0gMDsgXG4gICAgICAgICAgYWN0aXZlVGh1bWJSaWdodCA9IGFjdGl2ZVRvcC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgYWN0aXZlVGh1bWJSaWdodCA9IGNvdW50O1xuICAgICAgICAgIGFjdGl2ZVRodW1iTGVmdCA9IGFjdGl2ZVRvcCsxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgXG4gICAgICB9XG5cbiAgICAgXG4gICQoJ2JvZHknKS5maW5kKCcubmF2X19sZWZ0IC50aHVtYltkYXRhLXRodW1iPScrYWN0aXZlVGh1bWJMZWZ0KyddJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCdib2R5JykuZmluZCgnLm5hdl9fcmlnaHQgLnRodW1iW2RhdGEtdGh1bWI9JythY3RpdmVUaHVtYlJpZ2h0KyddJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICBjaGFuZ2VMZWZ0U2NyZWVuKCk7Ly/QktGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1XG5cblxuLy9jaGFuZ2UgbWFpbiBzbGlkZSB3aGVuIGNsaWNrIG9uIGxlZnQgbmF2IGJ0blxuICBmdW5jdGlvbiBsZWZ0YnRuQ2hhbmdlKCl7XG5cbiAgICB2YXIgbnVtRWxlbSA9ICQoJy5zbGlkZXJfX2Z1bGxpbWcuYWN0aXZlJykuYXR0cignZGF0YS1udW0nKTsgXG4gICAgJCgnLnNsaWRlcl9fZnVsbGltZy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IFxuICAgXG4gICAgaWYobnVtRWxlbSA9PSBjb3VudCl7XG4gICAgICBudW1FbGVtID0gMDtcbiAgICB9ZWxzZXtcbiAgICAgIG51bUVsZW0gPSArK251bUVsZW07XG4gICAgfVxuICAgICQoJy5zbGlkZXJfX2Z1bGxpbWdbZGF0YS1udW09JytudW1FbGVtKyddJykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvL2FkZCAuYWN0aXZlIGNsYXNzIGZvciBtYWluXG5cbiAgIFxuICB9O1xuXG5cbi8vLy9jaGFuZ2UgbWFpbiBzbGlkZSB3aGVuIGNsaWNrIG9uIHJpZ2h0IG5hdiBidG5cbiAgZnVuY3Rpb24gcmlnaHRidG5DaGFuZ2UoKXtcbiAgICB2YXIgbnVtRWxlbSA9ICQoJy5zbGlkZXJfX2Z1bGxpbWcuYWN0aXZlJykuYXR0cignZGF0YS1udW0nKTsgXG4gICAgJCgnLnNsaWRlcl9fZnVsbGltZy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IFxuICAgIFxuICAgIGlmKG51bUVsZW0gPT0gMCl7XG4gICAgICBudW1FbGVtID0gY291bnQ7XG4gICAgfWVsc2V7XG4gICAgICBudW1FbGVtID0gLS1udW1FbGVtO1xuICAgIH1cbiAgICAkKCdbZGF0YS1udW09JytudW1FbGVtKyddJykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvL2FkZCAuYWN0aXZlIGNsYXNzIGZvciBtYWluXG5cbiAgIFxuXG5cblxuICB9O1xuXG5cbi8vY2hhbmdlIG5hdiBzbGlkZXMgd2hlbiBjbGljayBvbiBMRUZUIG5hdiBidG5cbiAgZnVuY3Rpb24gbmF2TGVmdFNsaWRlKGNsYXNzTmFtZSwgc2Vjb25kTmFtZSl7XG5cbiAgICB2YXIgbnVtVGh1bWIgPSAkKCdib2R5JykuZmluZCgnLicrY2xhc3NOYW1lKycgLnRodW1iLmFjdGl2ZScpLmF0dHIoJ2RhdGEtdGh1bWInKTtcbiAgICB2YXIgZWxlbSA9ICQoJ2JvZHknKS5maW5kKCcuJytjbGFzc05hbWUrJyAudGh1bWJbZGF0YS10aHVtYj0nK251bVRodW1iKyddJyk7XG4gICAgZWxlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgXG4gICAgaWYobnVtVGh1bWIgPT0gY291bnQpe1xuICAgICAgbnVtVGh1bWIgPSAwO1xuICAgIH1lbHNle1xuICAgICAgbnVtVGh1bWIgPSArK251bVRodW1iO1xuICAgIH1cbiAgICB2YXIgbmV3RWxlbSA9ICQoJ2JvZHknKS5maW5kKCcuJytjbGFzc05hbWUrJyAudGh1bWJbZGF0YS10aHVtYj0nK251bVRodW1iKyddJylcbiAgICBuZXdFbGVtLmFkZENsYXNzKCdhY3RpdmUnKTsvL2FkZCBjbGFzc1xuXG4gICAgdmFyIG51bVRodW1iMiA9ICQoJ2JvZHknKS5maW5kKCcuJytzZWNvbmROYW1lKycgLnRodW1iLmFjdGl2ZScpLmF0dHIoJ2RhdGEtdGh1bWInKTtcbiAgICB2YXIgZWxlbTIgPSAkKCdib2R5JykuZmluZCgnLicrc2Vjb25kTmFtZSArJyAudGh1bWIuYWN0aXZlJyk7XG5cbiAgICBlbGVtMi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgaWYobnVtVGh1bWIyID09IGNvdW50KXtcbiAgICAgIG51bVRodW1iMiA9IDA7XG4gICAgfWVsc2V7XG5cbiAgICAgIG51bVRodW1iMiA9ICsrbnVtVGh1bWIyO1xuICAgIH1cbiAgICB2YXIgZWxlbTJOZXcgPSAkKCdib2R5JykuZmluZCgnLicrc2Vjb25kTmFtZSsnIC50aHVtYltkYXRhLXRodW1iPScrbnVtVGh1bWIyKyddJyk7XG4gICAgZWxlbTJOZXcuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vYWRkIGNsYXNzXG5cblxuICB9XG5cblxuLy9jaGFuZ2UgbmF2IHNsaWRlcyB3aGVuIGNsaWNrIG9uIFJJR0hUIG5hdiBidG4gIFxuICAgZnVuY3Rpb24gbmF2UmlnaHRTbGlkZShjbGFzc05hbWUsIHNlY29uZE5hbWUpe1xuICAgXHR2YXIgYWN0TmF2RWxlbSA9ICQoJ2JvZHknKS5maW5kKCcuJytjbGFzc05hbWUrJyAudGh1bWIuYWN0aXZlJyk7Ly/QndCw0YjQu9C4INCw0LrRgtC40LLRi9C90Lkg0Y3Qu9C10LzQtdC90YJcbiAgICB2YXIgbnVtVGh1bWIgPSBhY3ROYXZFbGVtLmF0dHIoJ2RhdGEtdGh1bWInKTsvL9Cd0LDRiNC70Lgg0L3QvtC80LXRgCDQsNC60YLQuNCy0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsFxuICAgIGFjdE5hdkVsZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGlmKG51bVRodW1iID09IDApe1xuICAgICAgbnVtVGh1bWIgPSBjb3VudDtcbiAgICB9ZWxzZXtcbiAgICAgIG51bVRodW1iID0gLS1udW1UaHVtYjtcbiAgICB9XG4gICBcdHZhciBhY3ROYXZFbGVtTmV4dCA9ICQoJ2JvZHknKS5maW5kKCcuJytjbGFzc05hbWUrJyAudGh1bWJbZGF0YS10aHVtYj0nK251bVRodW1iKyddJyk7Ly/QndCw0YjQu9C4INGB0LvQtdC00YPRjtGJ0LjQuSDRjdC70LXQvNC10L3Rgiwg0LrQvtGC0L7RgNGL0Lkg0LHRg9C00LXRgiDQsNC60YLQuNCy0L3Ri9C8XG4gICAgYWN0TmF2RWxlbU5leHQuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvL2FkZCBjbGFzc1xuICBcblxuICAgIC8v0J/QvtCy0YLQvtGA0Y/QtdC8INC/0YDQvtGG0LXQtNGD0YDRgyDQtNC70Y8g0LfQtdGA0LrQsNC70YzQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0L3QsNCy0LjQs9Cw0YbQuNC4XG4gICAgdmFyIGFjdE5hdkVsZW0yID0gJCgnYm9keScpLmZpbmQoJy4nK3NlY29uZE5hbWUrJyAudGh1bWIuYWN0aXZlJyk7XG4gICAgdmFyIG51bVRodW1iMiA9IGFjdE5hdkVsZW0yLmF0dHIoJ2RhdGEtdGh1bWInKTtcbiAgICBhY3ROYXZFbGVtMi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgaWYobnVtVGh1bWIyID09IDApe1xuICAgICAgbnVtVGh1bWIyID0gY291bnQ7XG4gICAgfWVsc2V7XG4gICAgICBcbiAgICAgIG51bVRodW1iMiA9IC0tbnVtVGh1bWIyO1xuICAgIH1cbiAgICB2YXIgYWN0TmF2RWxlbU5leHQyID0gJCgnYm9keScpLmZpbmQoJy4nK3NlY29uZE5hbWUrJyAudGh1bWJbZGF0YS10aHVtYj0nK251bVRodW1iMisnXScpXG4gICAgYWN0TmF2RWxlbU5leHQyLmFkZENsYXNzKCdhY3RpdmUnKTsvL2FkZCBjbGFzc1xuXG5cbiAgfVxuICAvLy8vLy8vLy8vLy8vLy8vL9Cf0LXRgNC10LrQu9GO0YfQtdC90LjQtSDRgdC60LjQu9C70L7QsiDQuCDQvdCw0LfQstCw0L3QuNC5INGA0LDQsdC+0YJcbiAgZnVuY3Rpb24gY2hhbmdlTGVmdFNjcmVlbigpe1xuICAgIHZhciBkYXRhTmFtZSA9ICQoJy5zbGlkZXJfX2Z1bGxpbWcuYWN0aXZlJykuYXR0cignZGF0YS1uYW1lJyk7XG4gICAgdmFyIGRhdGFTa2lsbHMgPSAkKCcuc2xpZGVyX19mdWxsaW1nLmFjdGl2ZScpLmF0dHIoJ2RhdGEtc2tpbGxzJyk7XG4gICAgdmFyIGRhdGFMaW5rID0gJCgnLnNsaWRlcl9fZnVsbGltZy5hY3RpdmUnKS5hdHRyKCdkYXRhLWxpbmsnKTtcblxuICAgICQoJy5zbGlkZXJfX3RpdGxlLCAuc2xpZGVyX19za2lsbHMsIC5zbGlkZXJfX2xpbmsnKS5odG1sKCcnKTtcbiAgICAkKCcuc2xpZGVyX190aXRsZScpLmFwcGVuZCgnPGgxIGNsYXNzPVwiYW5pbWF0ZWQgem9vbUluXCI+JysgZGF0YU5hbWUgKyc8L2gxPicpO1xuICAgICQoJy5zbGlkZXJfX3NraWxscycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImFuaW1hdGVkIGZsaXBJblhcIj4nKyBkYXRhU2tpbGxzICsnPC9kaXY+Jyk7XG4gICAgJCgnLnNsaWRlcl9fbGluaycpLmFwcGVuZCgnPGEgaHJlZj0nKyBkYXRhTGluayArJz48aSBjbGFzcz1cImljb24tbGluayBpY29uXCI+PC9pPtCf0LXRgNC10LnRgtC4INC90LAg0YHQsNC50YI8L2E+Jyk7XG4gIH1cblxuICAkKCcubmF2X19sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIGxlZnRidG5DaGFuZ2UoKTtcbiAgICBuYXZMZWZ0U2xpZGUoJ25hdl9fbGVmdCcsJ25hdl9fcmlnaHQnKTtcbiAgICBjaGFuZ2VMZWZ0U2NyZWVuKCk7XG4gIH0pO1xuICAkKCcubmF2X19yaWdodCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICByaWdodGJ0bkNoYW5nZSgpO1xuICAgIG5hdlJpZ2h0U2xpZGUoJ25hdl9fcmlnaHQnLCduYXZfX2xlZnQnKTtcbiAgICBjaGFuZ2VMZWZ0U2NyZWVuKCk7XG4gIH0pO1xuXG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
