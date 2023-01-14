$(function(){
    "use strict"
    $(".toggle-sidebar").on("click", function(){
        $(".content-area, .sidebar").toggleClass("no-sidebar");
    });
    // tooggle Submenue
    $(".toggle-submenu").on("click", function(){
        $(this).find('.fa-angle-right').toggleClass('down');
        $(this).next('.child-links').slideToggle();
    });
    //Open Close Fullscreen
    $(".toggle-fullscreen").on('click', function (){
        $(this).toggleClass('full-screen');
        if($(this).hasClass('full-screen')){
            openFullscreen();
        }else{
            closeFullscreen();
        }
    });
    // Toggle Settings
    $('.toggle-settings').on('click', function(){
        $(this).find('i').toggleClass('fa-spin');$(this).parent().toggleClass('hide-settings');
    });
    // Switch Colors Theme
    var themesClasses = [];
    $('.color-options li').each(function(){
        themesClasses.push($(this).data('theme'))
    });
    $('.color-options li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active')
        $('body').removeClass(themesClasses.join(' ')).addClass($(this).data('theme'));
    });
    // Switch Font options
    var fontClasses = [];
    $('.font-options select option').each(function(){
        fontClasses.push($(this).val());
    });
    $('.font-options select').on('change', function(){
        $('body').removeClass(fontClasses.join(' ')).addClass($(this).find('option:selected').val());
    });
});


var elem= document.documentElement;
function openFullscreen(){
    if(elem.requestFullscreen){
        elem.requestFullscreen();
    }else if (elem.mozRequestFullscreen){/*FIREFOX */
        elem.mozRequestFullscreen();
    }
    else if (elem.webkitRequestFullscreen){/* Chrome. safari, opera */
        elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen){/* IE, Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if (document.mozCancelFullscreen){/*FIREFOX */
        document.mozCancelFullscreen();
    }
    else if (document.webkitExitFullscreen){/* Chrome. safari, opera */
        document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen){/* IE, Edge */
        document.msExitFullscreen();
    }
}