$(function() {

    $(document).on('scroll', function(e) {
        const scrollPos = $(document).scrollTop();
        decoreLineMove('top', scrollPos);
    });
    
});

function decoreLineMove(pos, val) {
    const decorLine = $('.decor-line');
    const decoreNav = $('.nav-decore-inside');
    const decoreAboutTop = $('.decor-cube-top');
    const decoreAboutBot = $('.decor-cube-bottom');
    const decoreAboutBeh = $('.decor-cube-behind');
    
    decorLine.css(pos, -1 * (val / 50));
    decoreNav.css(pos, -1 * (val / 10));
    decoreAboutTop.css(pos, -1 * (val / 30));
    decoreAboutBot.css('bottom', (val / 50) - 180);
    decoreAboutBeh.css('bottom', (val / 30) - 80);
}
