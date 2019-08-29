// offcanvas menu
$(function () {
	'use strict'
	$('[data-toggle="offcanvas"]').on('click', function () {
	  $('.offcanvas-collapse').toggleClass('open')
	})
})

// Image picker
$('.toggleDetail h6').on('click', function(){
    $(this).parent().toggleClass('active').siblings().removeClass('active');
    $("i", this).toggleClass("fa-chevron-up fa-chevron-down");
});

var $currDiv = $( "#start" );
$('input:radio').on('click', function(){
    $currDiv  = $currDiv.next();
    $currDiv.toggleClass('active').siblings().removeClass('active');
    console.log($(this));
});

$('.dirDetalle').on('click', function(){
    $(this).toggleClass('active').siblings().removeClass('active');
});

jQuery(document).ready(function(){
    $('#spinner button').on('click', function(){
        let input = $(this).closest('#spinner').find('input[name=qty]');
        if($(this).data('action') === 'increment') {
            if(input.attr('max') === undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                input.val(parseInt(input.val(), 10) + 1);
            }
        } else if($(this).data('action') === 'decrement') {
            if(input.attr('min') === undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                input.val(parseInt(input.val(), 10) - 1);
            }
        }
    });

    $('input[type="checkbox"]').on('change', function() {
       $('input[type="checkbox"]').not(this).prop('checked', false);
    });
    
    $(':radio').change(function (event) {
        var id = $(this).data('id');
        var clase = $(this).data('id');

        if (id == "tarjetaVisa") {
            $("#tarjetaVisa").removeClass("none");
            $("#tarjetaMastercard").addClass("none");
            $("#exacto").addClass("none");
            $("#rangeOrder").addClass("none");
            $("#MetodoPago").addClass("none");
        }

        if (id == "tarjetaMastercard") {
            $("#tarjetaMastercard").removeClass("none");
            $("#tarjetaVisa").addClass("none");
            $("#exacto").addClass("none");
            $("#rangeOrder").addClass("none");
            $("#MetodoPago").addClass("none");
        }

        if (id == "efectivo") {
            $("#exacto").removeClass("none");
            $("#monto").removeClass("none");
            $("#tarjetaMastercard").addClass("none");
            $("#tarjetaVisa").addClass("none");
            $("#MetodoPago").removeClass("none");
        }

        if (id == "monto") {
            $("#rangeOrder").removeClass("none");
        }
        if (id == "exacto") {
            $("#rangeOrder").addClass("none");
        }
    });
});

// Image picker

$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

// SLIDER
var auto = true;
var pause = 7000;
var $this = $('#slider');
 
var slidesCont = $this.children('.slides-container');
var slides = slidesCont.children('.slide');
var arrowsCont = $this.children('.arrows');
var prevSlide = arrowsCont.children('.prev');
var nextSlide = arrowsCont.children('.next');
var slidesCount = slides.length;
var currentSlide = slides.first();
var currentSlideIndex = 1;
var autoPlay = null;

slides.not(':first').css('display', 'none');
currentSlide.addClass('active');

function fadeNext() {
    currentSlide.removeClass('active').fadeOut();
 
    if(currentSlideIndex == slidesCount) {
        currentSlide = slides.first();
        currentSlide.delay().addClass('active').fadeIn();
        currentSlideIndex = 1;
    } else {
        currentSlideIndex++;
        currentSlide = currentSlide.next();
        currentSlide.delay().addClass('active').fadeIn();
    }
}
 
// Function responsible for fading to previous slide
function fadePrev() {
    currentSlide.removeClass('active').fadeOut();
 
    if(currentSlideIndex == 1) {
        currentSlide = slides.last();
        currentSlide.delay().addClass('active').fadeIn();
        currentSlideIndex = slidesCount;
    } else {
        currentSlideIndex--;
        currentSlide = currentSlide.prev();
        currentSlide.delay().addClass('active').fadeIn();
    }
}
function AutoPlay() {
    clearInterval(autoPlay);
 
    if(auto == true)
        autoPlay = setInterval(function() {fadeNext()}, pause);
}

$(nextSlide).click(function(e) {
    e.preventDefault();
    fadeNext();
    AutoPlay();
});
 
$(prevSlide).click(function(e) {
    e.preventDefault();
    fadePrev();
    AutoPlay();
});
 
AutoPlay();
$(function(){
    $(".imgvisor").popImg();
})


$( document.body ).append( $( "<div>" ) );
var n = $( ".detalleCarro" ).length;
if(n > 4){
    $("#scrollerSection").css("overflow-y","scroll");
    $("#scrollerSection").css("overflow-x","hidden");
    $("#scrollerSection").css("max-height","250px");
    $("#scrollerSection").css("padding","0px 14px");
    $("#scrollerSection").css("background-color","#fff");
}
if(n <= 4){
    $("#scrollerSection").css("overflow","hidden");
    $("#scrollerSection").css("overflow-x","hidden");
    $("#scrollerSection").css("max-height","100%");
    $("#scrollerSection").css("padding","0px 14px");
    $("#scrollerSection").css("background-color","#fff");
}

$('.closebtn').click(function() {
    $(this).parent().parent().parent().hide( "slow", function() {
       
    });
});

var maxelm = 10;
var maxeld = 4;
// DELIVERY ----- LISTA D DIRECCIONES EMPRESA CANTIDAD LIMITE 10
$( document.body ).append( $( "<div>" ) );
var n = $( ".dirempresa" ).length;
if(n > maxeld){
    $(".scrolldir").css("overflow-y","scroll");
    $(".scrolldir").css("overflow-x","hidden");
    $(".scrolldir").css("max-height","988px");
}
if(n <= maxeld){
    $(".scrolldir").css("overflow","hidden");
    $(".scrolldir").css("overflow-x","hidden");
    $(".scrolldir").css("max-height","100%");
}

// RECOJO -----  LISTA D DIRECCIONES PERSONA CANTIDAD LIMITE 10
$( document.body ).append( $( "<div>" ) );
var n = $( ".direntrega" ).length;
if(n > maxelm){
    $(".scrolldir2").css("overflow-y","scroll");
    $(".scrolldir2").css("overflow-x","hidden");
    $(".scrolldir2").css("max-height","400px");
}
if(n <= maxelm){
    $(".scrolldir2").css("overflow","hidden");
    $(".scrolldir2").css("overflow-x","hidden");
    $(".scrolldir2").css("max-height","100%");
}

$('.handler').on('click', function(){
    $('.floatcart').toggleClass('oculto');
    $('#overBlack').toggleClass('hidden');
});
$('#overBlack').on('click', function(){
    $('.floatcart').toggleClass('oculto');
    $('#overBlack').toggleClass('hidden');
});

// 
var $divs = $(".detalleCarro").toArray().length;
$('#countProd').text($divs);

// Sticky cart
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var overBlack = document.getElementById("overBlack");
var toScroll = $(document).height() - 920;
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > toScroll) {
    header.classList.remove("sticky");
    header.classList.add("stickyFoot");
} else {
    header.classList.add("sticky");
    header.classList.remove("stickyFoot");
    $("#scrollerSection").css("max-height","221px");
  }
}
