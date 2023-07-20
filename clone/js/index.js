
                 
$(window).on('scroll', function(){
  if($(window).scrollTop() > $('.banner_main').innerHeight()){
     $('.inner_box').addClass('active');
  }else{
      $('.inner_box').removeClass('active');
  }
});


//dsfsfsfsf

const elR = document.querySelector('.mb_right a:last-of-type'),
      elUl = document.querySelector('.mb_none'),
      elC = document.querySelector('.mb_close');


 elR.onclick = function(v,k){
     elUl.classList.add('act');
 }


 elC.onclick = function(v,k){
     elUl.classList.remove('act');
 }

 //dfgdfasf

 
 var swiper = new Swiper(".banner_main", {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     effect: "fade",
     autoplay: {
         delay: 3000,
         disableOnInteraction: false,
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
     navigation: {
         nextEl: ".swiper-button-next.pc",
         prevEl: ".swiper-button-prev.pc",
     },
 });

//dfsafafafddaf


                     var swiper = new Swiper(".sect1", {
                                direction:'vertical',
                                spaceBetween: 30,
                                loop:true,
                                centeredSlides: true,
                                autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                                }
                                
                  });
//dfsafaf


            const elS2 = document.querySelectorAll('.box_list li');
            const elS2Content = document.querySelectorAll('.contents .slide1');

            let num = 1;
            elS2[num].classList.add('on');
            elS2Content[num].classList.add('active');

            elS2.forEach(function(ele,key){
                ele.onclick = function(){
                    elS2[num].classList.remove('on');
                    this.classList.add('on');

                    elS2Content[num].classList.remove('active');
                    elS2Content[key].classList.add('active');

                    num = key;
                }
            });
  

      
                var swiper = new Swiper(".slide1", {
                    slidesPerView: 1,
                    slidesPerColumnFill: 'column',
                     grid: {
                     rows: 3,
                     },
                    spaceBetween: 10, 
                    navigation: {
                        nextEl: ".swiper-button-next.pc2",
                        prevEl: ".swiper-button-prev.pc2",
                    },
                                            observer: true,
                        observeParents: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                  breakpoints: {
                    1280: {
                        loop:true,
                       
                        grid: {
                            rows: 0,
                        },
                        slidesPerView: 5,
                        spaceBetween: 30,
                        autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                        
                    },           
                  }
                });

               
                
   //fasfafaffds

   

   function updateTimer() {
       const future = Date.parse("2024/01/01 00:00:00");
       const now = new Date();
       const diff = future - now;

       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
       const hours = Math.floor(diff / (1000 * 60 * 60));
       const mins = Math.floor(diff / (1000 * 60));
       const secs = Math.floor(diff / 1000);

       
       const h = hours - days * 24;
       const m = mins - hours * 60;
       const s = secs - mins * 60;
       document.querySelector(".total_time").innerHTML =  
       '<img src="./img/todayTimer.png">'+'<p>' + h + '<span>:</span>' +
           + m + '<span>:</span>' +
           + s + '</p>';
       }
       setInterval(updateTimer, 1000);
//dfafafafas


var swiper = new Swiper(".haha", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1280: {
        centeredSlides: false,
        slidesPerView: 3,
    }
  },
});
//sdfafaafaf


$('.foot1_mb2 p').on('click',function(){
 $('.foot1_list').stop().slideToggle(0);
})  
//dfafaf


$('.foot2_mb1 p').on('click',function(){
 $('.foot2_mb2').stop().slideToggle(0);
})

$(window).on('scroll', function(){
    if($(window).scrollTop()){
       $('.gotop').addClass('active');
    }else{
        $('.gotop').removeClass('active');
    }
  });
  






