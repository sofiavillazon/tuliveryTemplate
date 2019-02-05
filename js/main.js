// offcanvas menu
$(function () {
	'use strict'
	$('[data-toggle="offcanvas"]').on('click', function () {
	  $('.offcanvas-collapse').toggleClass('open')
	})
})

// Image picker

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
            $("#efectivo").addClass("none");
        }

        if (id == "tarjetaMastercard") {
            $("#tarjetaMastercard").removeClass("none");
            $("#tarjetaVisa").addClass("none");
            $("#efectivo").addClass("none");
        }

        if (id == "efectivo") {
            $("#efectivo").removeClass("none");
            $("#tarjetaMastercard").addClass("none");
            $("#tarjetaVisa").addClass("none");
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

