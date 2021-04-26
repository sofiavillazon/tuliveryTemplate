$(document).on('ready', function() {

    $('.slider-for').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.slider-nav'
     });
    
     $('.slider-nav').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       asNavFor: '.slider-for',
       dots: false,
       centerMode: true,
       focusOnSelect: true,
       prevArrow: '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="38.66px" style="margin: 0px 10px;" viewBox="0 0 14.769 38.66" enable-background="new 0 0 14.769 38.66" xml:space="preserve"><rect x="-54.982" y="136.746" fill="#9BCA64" width="107.188" height="107.188"/><path fill="#FFFFFF" d="M2.801,219.168c-3.288,0-5.963-2.674-5.963-5.963c0-3.287,2.675-5.961,5.963-5.961c3.286,0,5.959,2.674,5.959,5.961C8.76,216.495,6.087,219.168,2.801,219.168z M-23.357,219.168c-3.286,0-5.961-2.674-5.961-5.963c0-3.287,2.675-5.961,5.961-5.961c3.287,0,5.962,2.674,5.962,5.961C-17.395,216.495-20.07,219.168-23.357,219.168z M9.71,203.29h-38.467l-9.264-17.704h5.858l6.141,11.733l0.205,0.391l0.203,0.389h0.438h0.439H4.722h0.545h0.545l0.152-0.523l0.152-0.523l8.97-30.878h22.935v5.191H20.075H19.53h-0.544l-0.153,0.522l-0.151,0.523L9.71,203.29z M-20.498,190.98c-3.287,0-5.962-2.674-5.962-5.961c0-3.288,2.675-5.962,5.962-5.962c3.286,0,5.961,2.674,5.961,5.962C-14.537,188.306-17.211,190.98-20.498,190.98z M-0.652,190.405c-3.286,0-5.961-2.674-5.961-5.961c0-3.288,2.675-5.962,5.961-5.962c3.287,0,5.963,2.674,5.963,5.962C5.311,187.731,2.635,190.405-0.652,190.405z M-10.43,173.435c-3.288,0-5.962-2.674-5.962-5.961c0-3.287,2.674-5.961,5.962-5.961c3.287,0,5.96,2.674,5.96,5.961C-4.47,170.761-7.143,173.435-10.43,173.435z"/><polygon fill="#4C82AD" points="0,19.33 11.477,0 14.769,1.954 4.775,18.783 4.613,19.058 4.454,19.33 4.614,19.602 4.775,19.875 14.769,36.707 11.477,38.66 "/></svg>',
     });
  
  
     $(".regular").slick({
       focusOnSelect: true,
       infinite: true,
       arrows: true,
       pauseOnHover: false,
       autoplay:true,
       autoplaySpeed: 1200,
       slidesToShow: 5,
       slidesToScroll: 1,
       centerMode: false,
       prevArrow: '<a style="display: block; position: absolute; top:25px; left: -5px; z-index: 1; " class="btn-arrow"><i class="icon-arrow icon-arrow-left"></i></a>',
       nextArrow: '<a style="display: block; position: absolute; top:25px; right: -15px; z-index: 1; transform: rotate(180deg);" class="btn-arrow"><i class="icon-arrow icon-arrow-right"></i></a>',
       responsive: [
         {
           breakpoint: 1234,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1,
             infinite: true,
           }
         },
         {
          breakpoint: 900,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true
           }
         }
       ]
  
     });
  
     $(".listOrder").slick({
      focusOnSelect: true,
      infinite: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      centerMode: false,
      prevArrow: '<a style="display: block; position: absolute; top:25px; left: 0px; z-index: 1; " class="btn-arrow"><i class="icon-arrow icon-arrow-left"></i></a>',
      nextArrow: '<a style="display: block; position: absolute; top:25px; right: 0px; z-index: 1; transform: rotate(180deg);" class="btn-arrow"><i class="icon-arrow icon-arrow-right"></i></a>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
  
    });
   
  });
  

function showpassword2() {
    $("#password1").removeClass("fade").modal("hide");
    $("#password2").modal("show").addClass("fade");
}

$("#password-ok").on("click", function() {
    showpassword2();
});



//MenuMobile
function quieroComprar() {

    $(".escogerOpcion").removeClass("show");
    $(".heightBanner").removeClass("show");
    $(".heightSlide").addClass("show");
    $(".imgbgHome").addClass("mobileSize");
}

$("#quieroComprar").on("click", function() {
    quieroComprar();
});

function quieroVender() {

    $(".escogerOpcion").removeClass("show");
    $(".heightBanner").addClass("show");
    $(".heightSlide").removeClass("show");
}

$("#quieroVender").on("click", function() {
    quieroVender();
});

var video = document.getElementById("myVideoPlayer");
function stopVideo(){
    video.pause();
    video.currentTime = 0;
}
$("#verVideo").on('hidden.bs.modal', function () {
    stopVideo();
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

//line para plantilla4

var numLine4 = 3;
$(".plantilla4 .lineNumber").css("-webkit-line-clamp",numLine4.toString());
$(".plantilla4 .containerTag").css("height",(numLine4*16 + 130)+"px");

var numLine3 = 5;
$(".plantilla3 .lineNumber").css("-webkit-line-clamp",numLine3.toString());
$(".plantilla3 .containerTag").css("height",(numLine3*16 + 100)+"px");

var numLine2 = 5;
$(".plantilla2 .lineNumber").css("-webkit-line-clamp",numLine2.toString());
$(".plantilla2 .containerTag").css("height",(numLine2*16 + 85)+"px");

var numLine1 = 4;
$(".plantilla1 .lineNumber").css("-webkit-line-clamp",numLine1.toString());
$(".plantilla1 .containerTag").css("height",(numLine1*16 + 80)+"px");

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

function changeModal2() {
    $("#modalContratar").removeClass("fade").modal("hide");
    $("#modalCaptcha").modal("show").addClass("fade");
}
$("#paso2").on("click", function() {
    changeModal2();
});
function changeModal3() {
    $("#modalCaptcha").removeClass("fade").modal("hide");
    $("#modalMensaje").modal("show").addClass("fade");
}
$("#paso3").on("click", function() {
    changeModal3();
});

function changeModal4() {
    $("#modalContratar").removeClass("fade").modal("hide");
    $("#modalMensajeUsuario").modal("show").addClass("fade");
}
$("#paso4").on("click", function() {
    changeModal4();
});


$(".btn-hide").on("click", function() {
    $('.scrollerSectionCss').toggleClass('oculto');
    $('.cutHeader').toggleClass('sideoculto');
    $('.compactoTemplateHeight').toggleClass('sideoculto');
});


$(".icon-expand").on("click", function() {
    $('.search').toggleClass('expanded');
    $('.gradientSearch').focus();
});
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


// duration of scroll animation
var scrollDuration = 300;
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
var paddleMargin = 0;
var scrollInc= itemSize*3;

var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}

var menuWrapperSize = getMenuWrapperSize();
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});

var menuVisibleSize = menuWrapperSize;
var getMenuSize = function() {
	return itemsLength * itemSize;
};

var menuSize = getMenuSize();
var menuInvisibleSize = menuSize - menuWrapperSize;
var getMenuPosition = function() {
    // console.log("=");
    return $('.menu').scrollLeft();
};

$('.menu').on('scroll', function() {
    menuInvisibleSize = menuSize - menuWrapperSize;
    
	var menuPosition = getMenuPosition();
	var menuEndOffset = menuInvisibleSize - paddleMargin;

	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
    }
});



function showDiv(element){
    $('.colum-divider').css("width", (100/element.value)- 0.3 +'%' )
    $('.colum-divider').css("zoom", (6/element.value) )
    $('.colum-zoom').css("zoom", (5/element.value) )
}

// scroll to left
$(rightPaddle).on('click', function() {
    scrollInc = scrollInc + (itemSize*3);
    $('.menu').animate( { scrollLeft: scrollInc }, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
    scrollInc = scrollInc - (itemSize*3);
    $('.menu').animate( { scrollLeft: scrollInc}, scrollDuration);
});

// Image picker
// $('.toggleDetail h6').on('click', function(){
//     $(this).parent().toggleClass('active').siblings().removeClass('active');
//     $("i", this).toggleClass("fa-chevron-up fa-chevron-down");
// });

$('.barMenuProfile a').on('click', function(){
    $("#profileMenuFloat").toggleClass('open');
});

// var $currDiv = $( "#start" );
// $('input:radio').on('click', function(){
//     $currDiv  = $currDiv.next();
//     $currDiv.toggleClass('active').siblings().removeClass('active');
//     console.log($(this));
// });

$('.dirDetalle').on('click', function(){
    $(this).toggleClass('active').siblings().removeClass('active');
});

$('#toggleTulivery').on('click', function(){
    $('.navbar-collapse').toggleClass("open");
    $('.linkMenu').toggleClass("noshow");
});

$('.linkMenu').on('click', function(){
    $('.navbar-collapse').toggleClass("openProfile");
    $('.navbar-toggler').toggleClass("noshow");
    $('.linkMenu').toggleClass("rightPosition");
});

$('#categoryOptions').on('click', function(){
    $('.menuCateg').toggleClass("show");
    $('#categoryOptions').toggleClass("press");
});

$('#categoryOptions2').on('click', function(){
    $('.menuCateg').toggleClass("show");
    $('#categoryOptions').toggleClass("press");
});
$('.bg-averlay').on('click', function(){
    $('.menuCateg').toggleClass("show");
    $('#categoryOptions').toggleClass("press");
});
$('.sidebar-toggle').collapse();

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
    $('.floatcart').removeClass('oculto');
    $('#overBlack').removeClass('hidden');
});

$('.closeCart').on('click', function(){
    $('.floatcart').addClass('oculto');
    $('#overBlack').addClass('hidden');
});

$('#overBlack').on('click', function(){
    $('.floatcart').toggleClass('oculto');
    $('#overBlack').toggleClass('hidden');
});


var $divs = $(".detalleCarro").toArray().length;
$('#countProd').text($divs);
      

// Sticky cart

    window.onscroll = function() {
        if( $("#scrollerSection").hasClass("scrolly")){
            console.log("sdfasd");
            myFunction()
        }
    };

var header = document.getElementById("myHeader");
var overBlack = document.getElementById("overBlack");

var toScroll = $(document).height() - 980;
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset < 20) {
        header.classList.remove("sticky");
        // header.classList.remove("stickyFoot");
        $("#scrollerSection .scrollerSection").css("max-height","calc(100vh - 60px);");
    }
    else{
        if (window.pageYOffset > toScroll) {
            header.classList.add("sticky");
            // header.classList.add("stickyFoot");
            $("#scrollerSection .scrollerSection").css("max-height","calc(100vh - 60px);");
        } else {
            header.classList.add("sticky");
            // header.classList.remove("stickyFoot");
            // $("#scrollerSection").css("max-height","215px");
        }
    }

}

// 


/* Hero Area Slider Active */
$('.hero-area').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    fade: true,
    easing: 'ease-in-out',
    speed: 2000,
    prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="icon-arrow-left"></i></span>',
    nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="icon-arrow-right"></i></span>',
  });


//   SLider
