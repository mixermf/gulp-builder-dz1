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

