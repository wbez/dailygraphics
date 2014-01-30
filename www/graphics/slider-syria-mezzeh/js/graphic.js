var $ba;
var $ba_img_before;

var orig_width = 900;
var orig_height = 675;


function render(width) {
    var new_width = $ba.width();
    var ratio = new_width / orig_width;
    var new_height = orig_height * ratio;

    $.each($ba_img_before, function(k,v) {
        $(v).width(new_width);
        $(v).height(new_height);
    });

    $('#before-after-1').beforeAfter( { beforeLinkText: '2004', afterLinkText: '2011' } );

    // update responsive iframe
    sendHeightToParent();
}

/*
 * NB: Use window.load instead of document.ready
 * to ensure all images have loaded
 */
$(window).load(function() {
    $ba = $('#before-after');
    $ba_img_before = $ba.find('.before img');

    setupResponsiveChild({
        renderCallback: render
    });
})