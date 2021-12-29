
//another way off writeung an anonuomus function   \
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 0){
           document.getElementById("bg").style.background="tomato";
           document.getElementById("bg").style.padding="15px 0px";
        }else{
            document.getElementById("bg").style.background="transparent";
        }
    })
    //toogel menu for navbar displaying
    $('.menu-btn').click(function()
    {   
      
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
   }); 
     
    //typing animation on homepage   
       var typed= new Typed(".type",{
           strings:["programmer","game developer","website designer","gamer"],
           typeSpeed:100,
           backSpeed:60,
           loop:true
       });
       //this code will iterate each element of our array and display it 
       var typed= new Typed(".type-2",{
        strings:["programmer","game developer","website designer","gamer"],
        typeSpeed:200,
        backSpeed:90,
        loop:true
    });
    
   //owl carousal code for team section
   $('.carousel').owlCarousel({
           margin:20,
           loop:true,
           autoplayTimeOut:2000,
           autoplayHoverPause:true,
           responsive:
           {
               0:{
                   items:1,
                   nav:false
               },
               600:{
                items:2,
                nav:false
               },
               1000:{
                items:3,
                nav:false
               }
           }

   });
});