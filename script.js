const preloader=document.querySelector("[data-preloader]");
window.addEventListener("load",function(){
    preloader.classList.add("remove");
});