$(window).on('scroll', function(){
    if($(window).scrollTop()){
       $('.gotop').addClass('active');
    }else{
        $('.gotop').removeClass('active');
    }
  });
  //dsfa

         const elR = document.querySelector('.mb_right a:last-of-type'),
               elUl = document.querySelector('.mb_none'),
               elC = document.querySelector('.mb_close');
        

          elR.onclick = function(v,k){
              elUl.classList.add('act');
          }


          elC.onclick = function(v,k){
              elUl.classList.remove('act');
          }
        
//sdfafa


$('.qna_list li').on('click',function(){
    if(!$(this).hasClass('active')){
        $('.qna_list li')
        .removeClass('active')
        .find('.dada2n').stop().slideUp();
    }

    $(this)
    .toggleClass('active')
    .find('.dada2n').stop().slideToggle();
})

//dfafaf


$('.foot1_mb2 p').on('click',function(){
 $('.foot1_list').stop().slideToggle(0);
})  

//dfggadgfd


$('.foot2_mb1 p').on('click',function(){
 $('.foot2_mb2').stop().slideToggle(0);
})
