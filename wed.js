var tl = gsap.timeline()


tl.from("#nav h1, #nav h4, #nav i, #nav h5" ,{
    delay:0.6,
    y:-50,
    opacity: 0 ,
    stagger: 0.2,
})
.from("#center>h1",{
    y:40,
    delay:0.4,
    scale:1.0,
    opacity:0 ,
   
})
.from("#center>p1",{
    y:20,
    delay:0.4,
    scale:1.0,
    opacity:0 ,
   
})
.from("#center>i",{
    y:20,
    delay:0.2,
    scale:1.0,
    opacity:0 ,
   
})
.from("#page1 img",{
    y:20,
    delay:0.2,
    scale:0.8,
    opacity:0 ,
   
})


