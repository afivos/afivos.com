// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48466891-1', 'auto');
ga('send', 'pageview');


// Fluidbox

$(function () {
    $('a').fluidbox({
	    immediateOpen: true,
	    loader: true
    });
})

// Close instance after viewport scroll
$(window).scroll(function() {
	$('.fluidbox--opened').fluidbox('close');
});

// Close instance after 'esc' key is pressed
$(window).bind('keydown', function(e) {
    if (e.which == 27) {
        $('.fluidbox--opened').fluidbox('close');
    }
});