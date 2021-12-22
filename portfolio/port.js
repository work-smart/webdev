
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
});