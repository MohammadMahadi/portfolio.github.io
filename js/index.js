

//*************************************theme switcher for mobile start
//dom manupulate diffren sistem for media qury object

let theme_chnger = document.getElementById("theme-chnger");

theme_chnger.addEventListener("click", function () {


    if (document.body.classList.contains("body")) {

        document.body.classList.remove("body");
        document.body.classList.add("body2");

    } else if (document.body.classList.contains("body2")) {

        document.body.classList.remove("body2");
        document.body.classList.add("body3");

    }else if(document.body.classList.contains("body3")){

        document.body.classList.remove("body3");
        document.body.classList.add("body4");
    }else if(document.body.classList.contains("body4")){

        document.body.classList.remove("body4");
        document.body.classList.add("body");
    }
});
//*************************************theme switcher for mobile finish


//*************************************theme switcher for desktop start
// btn eleemnt find
let green_btn=document.getElementById("desktop-theme1");
let red_btn=document.getElementById("desktop-theme2");
let purpul_btn=document.getElementById("desktop-theme3");
//effectec elletmet find
let desktop_themedefult=document.getElementById("desktop-themedefult");
let desktop_bg=document.getElementById("hero-desktop");
let about_hr=document.getElementById("about-hr");




green_btn.addEventListener("click",function(){

   desktop_bg.style.backgroundColor="#00FE9C";
   about_hr.style.color="#00FE9C";

})


red_btn.addEventListener("click",function(){

    desktop_bg.style.backgroundColor="#00FFFF";
    about_hr.style.color="#00FFFF";
})

purpul_btn.addEventListener("click",function(){

    desktop_bg.style.backgroundColor="#ADFF2F";
    about_hr.style.color="#ADFF2F";
})


desktop_themedefult.addEventListener("click",function(){

    desktop_bg.style.backgroundColor="#F5DF4E";
    about_hr.style.color="#d7bb00";
})

//*************************************theme switcher for desktop finish


//================================================back to top button sript start here





//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}














//================================================back to top button sript finish here