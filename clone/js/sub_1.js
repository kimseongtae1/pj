$(window).on('scroll', function(){
    if($(window).scrollTop()){
       $('.gotop').addClass('active');
    }else{
        $('.gotop').removeClass('active');
    }
  });
  //sdfa
const elR = document.querySelector('.mb_right a:last-of-type'),
      elUl = document.querySelector('.mb_none'),
      elC = document.querySelector('.mb_close');


 elR.onclick = function(v,k){
     elUl.classList.add('act');
 }


 elC.onclick = function(v,k){
     elUl.classList.remove('act');
 }

//sdfafafasd

var swiper = new Swiper(".add", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: { //반응형
    // 화면의 넓이가 320px 이상일 때
    320: {
    slidesPerView: 1,
    spaceBetween: 10
    },
    // 화면의 넓이가 1280px 이상일 때
    1280: {
    slidesPerView: 2,
    spaceBetween: 10
    }
},
});

//dfafafaffa


        const elGgood = document.querySelectorAll('.good_item div div'),
              elSection = document.querySelectorAll('section');

        let num = 0;

        let secArr = [];

            elSection.forEach(function(ele){
                secArr.push(ele.getBoundingClientRect());
            })

                window.addEventListener('scroll', function(){
                  
                    if(matchMedia("(min-width:481px) and (max-width:1279px)").matches){
                        secArr.forEach(function(secPos,k){
                        
                            if(secPos.y - window.innerHeight/3 < window.scrollY){
                                menuFun(k);
                            }
                        });
                    }else{
                        secArr.forEach(function(secPos,k){
                        
                            if(secPos.y - window.innerHeight/4 < window.scrollY){
                                menuFun(k);
                            }
                        });
                    }
                    
            })


        elGgood.forEach(function(v,k){
                v.onclick = function(){

                    menuFun(k);

                    elSection[k].scrollIntoView(
                        {behavior:"smooth", block:"center"}
                    );
                    
                   
                }
        })

        function menuFun(key){

                    elGgood[num].classList.remove('act');
                    elGgood[key].classList.add('act');
                    num = key;
        }

//dfafafd

$('.foot1_mb2 p').on('click',function(){
 $('.foot1_list').stop().slideToggle(0);
})

//dsfafaf


$('.foot2_mb1 p').on('click',function(){
 $('.foot2_mb2').stop().slideToggle(0);
})

