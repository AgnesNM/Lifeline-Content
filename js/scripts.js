let hideNav = () => {
    document.querySelector(".toc2").addEventListener("click", function(){
        document.querySelector("nav").style.display = "none";
    });        
};

hideNav();

// function scrollUp (){
//     document.querySelector(".scroller").addEventListener("click", function(){
//         document.querySelector(".scrollerp").style.display = "block";        
//     });
//     document.querySelector(".scrollerp").addEventListener("click", function(){
//         document.querySelector("nav").style.display = "block";
//     })        
// };
// scrollUp();     

