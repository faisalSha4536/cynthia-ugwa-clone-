// locomotive for smooth scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// chaseing cursour

let minicircle = document.querySelector('#minicircle');
let main = document.querySelector('#main')

main.addEventListener('mousemove', function(dets){
    minicircle.style.left = dets.x + 'px'
    minicircle.style.top = dets.y + 'px'
})

// animating headings using gsap

let tl = gsap.timeline();

tl.from('#nav',{
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
})

.to('.boundingelm',{
    y: 0,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: .2,
    delay: -1
})
.from('#herofooter',{
    y: -10,
    opacity: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut
})

// mouse hover picture

let elm = document.querySelectorAll('.elem')
let elmImg = document.querySelector('.elem img')

elm.forEach(function(val){

    val.addEventListener('mousemove', function(dets){
        val.childNodes[1].style.left = dets.x +'px';
    })
    
  val.addEventListener('mouseenter', function(){
    val.childNodes[1].style.opacity = 1;
  })
    
  val.addEventListener('mouseleave', function(){
    val.childNodes[1].style.opacity = 0;
  })
})



