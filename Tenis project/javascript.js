var cr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x  + "px"
    cr.style.top = dets.y + "px"
    blur.style.left = dets.x - 140 + "px"
    blur.style.top = dets.y - 140 + "px"
});


var h4all =  document.querySelectorAll("#nav h4")
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            cr.styles.scale = 3
            cr.style.border = "1px solid #fff"
            cr.style.background = "transparent"
        })
    });
    var h4all =  document.querySelectorAll("#nav h4")
    h4all.forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
            cr.styles.scale = 1
            cr.style.border = "0px solid #95c11e"
            cr.style.background = "transparent"
        })
    });

gsap.to("#nav",{
    background: "#000",
    color: "fff",
    duration: 0.5,
    height: "150px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3,
    }
})

gsap.to("#main",{
    background: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start: "top -40vh",
        end: "top -70%",
        scrub: 3,
    }    
    
})


gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration: 1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
})
