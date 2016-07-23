
$(function(){'use strict';
  var tg;
  var tgg;
  var tggg;
  var tar;
  var targ;
  var new_targ;
  var new_size;
  var new_rx;
  var new_targ;

  var new_de;
//provent horazontal scrole

  window.onscroll = function () {
  window.scrollTo(0,0);
}

//rotation
  $('#buttonPanil').on("click", function(e){
    if(e.target.nodeName == 'P'){
      tg = $(e.target).parent('.button');
    }else{tg = $(e.target);
    }
    tgg = $(tg).attr('id').slice(1);
    if(new_de == null){
      new_de = 30;
    }
    tggg = tgg * new_de;
    $('.button').removeClass('button_t');
    $(tg).addClass('button_t');
    if(tgg == 0){
      $("#box6").css({'transform':'rotatey(' + tggg + 'deg)'});
    }else{
      $("#box6").css({'transform':'rotatey(-' + tggg + 'deg)'});
    }
  });

//number of pannels
  $('#buttonPanil2').on("click", function(f){
    var tar;
    var targ;
    if(f.target.nodeName == 'H2'){tar = $(f.target).parent('.button2');
  }else
  {tar = $(f.target);
  }
  $('.button2').removeClass('button2_t');
    $(tar).addClass('button2_t');
    targ = $(tar).attr('id').slice(2);
    var ids = ['.a', '.b', '.c', '.d', '.e', '.f', '.g', '.h', '.i'];
    var id_array = ids[targ];
    $('.face').each(function(index){
    $('.button').css('opacity', '1');
    $('.face').css('opacity', '1');
    $(id_array).css('opacity', '0');
  });
  new_targ = Number(targ) + 3;
  new_de = 360 / new_targ;
  var deg_array = [];
  var i = 0;
  if(new_size == null){
    new_size = 200;
  }
  do {
    var new_deg =new_de*i;
    var new_degs = new_deg.toFixed(2);
    deg_array.push(new_degs);
    i++;}
    while (i < new_targ);
    var tz = Math.round( ( new_size / 2 ) / Math.tan( ( ( Math.PI * 2 ) / new_targ ) / 2 ) );
    $.each(deg_array, function( index, value ) {
      var index_id = '#f' + index;
      $(index_id).css({ 'Transform': 'rotatey(' + value + 'deg) translateZ(' + tz + 'px)'});

    });

});
//rotationX
$('#buttonPanil3').on("click", function(g){
  var tar1;
    var targ1;

    if(g.target.nodeName == 'H3'){
      tar1 = $(g.target).parent('.button3');}
        else {tar1 = $(g.target);
        }
    $('.button3').removeClass('button3_t');
    $(tar1).addClass('button3_t');
      targ1 = $(tar1).attr('id').slice(2);
      new_rx = 18 * targ1;
      $('#innerWrapper6').css({'transform':'rotatex(' + new_rx + 'deg)'});
      console.log(tar1);
      console.log(new_rx);
      });

//panel size
$('#buttonPanil4').on("click", function(h){
  var tar2;
  var targ2;
  if(h.target.nodeName == 'H3'){
      tar2 = $(h.target).parent('.button4');}
        else {tarh = $(h.target);
        }
        $('.button4').removeClass('button4_t');
    $(tar2).addClass('button4_t');
         targ2 = $(tar2).attr('id').slice(2);
         new_size = 50 + 30 * targ2;
         $('.face').css({'width': new_size});


var new_face = 45 - 2 * targ2;
var new_face_left = new_face + '%';
$('.face').css({'left': new_face_left});
console.log(new_face);
console.log(new_face_left);
  if(new_targ == null){
    new_targ = 12;
  }

  var new_de = 360 / new_targ;
  var deg_array = [];
  var i = 0;
  do {
    var new_deg =new_de*i;
    var new_degs = new_deg.toFixed(2);
    deg_array.push(new_degs);
    i++;}
    while (i < new_targ);
    var tz = Math.round( ( new_size / 2 ) / Math.tan( ( ( Math.PI * 2 ) / new_targ ) / 2 ) );
    $.each(deg_array, function( index, value ) {
      var index_id = '#f' + index;
      $(index_id).css({ 'Transform': 'rotatey(' + value + 'deg) translateZ(' + tz + 'px)'});

    });
});
});