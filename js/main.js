

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

function showpassword2() {
    $("#modalContratar").removeClass("fade").modal("hide");
    $("#modalCaptcha").modal("show").addClass("fade");
}
$("#paso2").on("click", function() {
    showpassword2();
});
function showpassword3() {
    $("#modalCaptcha").removeClass("fade").modal("hide");
    $("#modalMensaje").modal("show").addClass("fade");
}
$("#paso3").on("click", function() {
    showpassword3();
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

$('#toggleTulivery').on('click', function(){
    $('.navbar-collapse').toggleClass("open");
    $('.linkMenu').toggleClass("noshow");
});

$('.linkMenu').on('click', function(){
    $('.navbar-collapse').toggleClass("openProfile");
    $('.navbar-toggler').toggleClass("noshow");
    $('.linkMenu').toggleClass("rightPosition");
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
    $('.floatcart').toggleClass('oculto');
    $('#overBlack').toggleClass('hidden');
});
$('#overBlack').on('click', function(){
    $('.floatcart').toggleClass('oculto');
    $('#overBlack').toggleClass('hidden');
});


var $divs = $(".detalleCarro").toArray().length;
$('#countProd').text($divs);
      

// Sticky cart
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var overBlack = document.getElementById("overBlack");

var toScroll = $(document).height() - 980;
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset < 20) {
        header.classList.remove("sticky");
        header.classList.remove("stickyFoot");
    }
    else{
        if (window.pageYOffset > toScroll) {
            header.classList.remove("sticky");
            header.classList.add("stickyFoot");
        } else {
            header.classList.add("sticky");
            header.classList.remove("stickyFoot");
            $("#scrollerSection").css("max-height","215px");
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



