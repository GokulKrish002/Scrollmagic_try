document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    
    timeline
    .from('.section_1_01', 4, {
        y: -550,
        x: -550,
        ease: Power3.easeInOut
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);
})