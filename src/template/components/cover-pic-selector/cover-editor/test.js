function buildcanvas() {
    var stcanvas = document.getElementById('stcanvas');
    var ctx = stcanvas.getContext('2d');

    make_pic(ctx);

}


// prepare image to fit canvas;

function prep_image() {
    pic_i = 400;
    xfact = pic_i / 400;

    return xfact;
}

var moveXAmount=0;
var moveYAmount=0;
var isDragging=false;
var prevX = 0;
var prevY = 0;

function make_pic(ctx) {
    ctx.clearRect(0, 0, 400, 550);

    // Mask for clipping
    mask_image = new Image();
    mask_image.src = 'http://i.imgur.com/yOc0YHC.png';
    ctx.drawImage(mask_image, 0, 0);
    ctx.save();

    pic_image = new Image();
    pic_image.src = 'http://i.imgur.com/DVhVSH1.jpg';
    xfact = prep_image();

    var im_width = parseInt(pic_image.width + $('#resize').slider('value') / xfact);
    var im_height = parseInt(pic_image.height + $('#resize').slider('value') / xfact);
    // alert(im_width);
    ctx.translate(200, 275);
    ctx.rotate($('#rotat').slider('value') * Math.PI / 180);
    ctx.globalCompositeOperation = "source-in";
    ctx.drawImage(pic_image, -400 / 2 + moveXAmount, -550 / 2 + moveYAmount, im_width, im_height);
    ctx.restore();
}

$("#stcanvas").mousedown(function(){
    isDragging = true;
    prevX=0;
    prevY=0;
});

$(window).mouseup(function(){
    isDragging = false;
    prevX=0;
    prevY=0;
});

/*
$(window).mousemove(function(event) {
  $("#stcanvas").css({"left" : event.pageX, "top" : event.pageY});
})*/

$(window).mousemove(function(event) {
    if( isDragging == true )
    {
        if( prevX>0 || prevY>0)
        {
            moveXAmount += event.pageX - prevX;
            moveYAmount += event.pageY - prevY;
            buildcanvas();
        }
        prevX = event.pageX;
        prevY = event.pageY;
    }
});

$("#rotat").slider({
    value: 0,
    min: -180,
    max: 180,
    step: 1,
    slide: function () {
        buildcanvas();
    }

});

$("#resize").slider({
    value: 0,
    min: -150,
    max: 150,
    step: 1,
    slide: function (event, ui) {
        $('#img_resize').val(ui.value);
        buildcanvas();
    }

});
buildcanvas();