// provides a way to asynchronously observe changes
// in the intersection of a target element with an 
// ancestor element or with a top-level document's viewport.

const checkContainer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
            console.log('added');
            document.querySelectorAll(".animated")[1].classList.add("fade-in-top");
            document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
        }
    })
})
checkContainer.observe(document.querySelector(".contain"))

// Check scrolling
$('.scrollEffect a').on('click',function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function(){
                window.location.hash = hash;
            }
        );
    }
});