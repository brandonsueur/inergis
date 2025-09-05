$(document).ready(function() {

    // setSideHeight('.back-insider');
    $('#newclose').hide();
    $('.flip-card-back').hide();
    $("#frontcover").remove();

    var isAnimated = false;
    var GlobalClose = false;
    var annule;
    var rot;
    var side = 'front';

    footerOpen = function(footerId) {
        GlobalClose = true;
        $('#newclose').show();
        $('#newshare').hide();
        $('.PremierSet').hide();
        $('.SecondSet').hide();
        $('.footbox').hide();
        $('.aucasoufullscreen').hide();
        $('.Intro.dol').hide();
        $('.Intro.leg').hide();
        $('#' + footerId).fadeIn();
        onloadinit();
        return false;
    }

    footerClose = function() {
        GlobalClose = false;
        $('#newclose').hide();
        $('#newshare').show();
        $('.Intro.dol').hide();
        $('.Intro.leg').hide();
        $('.PremierSet').fadeIn();
        $('.SecondSet').fadeIn();
        $('.footbox').show();
        $('.aucasoufullscreen').fadeIn();
        onloadinit();
        return false;
    }

    langChooser = function() {
        $('#Languages').toggle();
        return false;
    }

    toggleMenu = function() {
        if (!isAnimated) {
            // window.scrollTo(0,0);
            if (typeof(flipDelay) !== 'undefined') {
                isAnimated = true;
                isAnimatedFeedback = setTimeout(function() {
                    isAnimated = false;
                    window.clearTimeout(isAnimatedFeedback);
                }, (typeof(flipDelay) !== 'undefined' ? flipDelay : 500));
            }
            if ($('.flip-card').hasClass('is-open') === true) {
                closeMenu();
            } else {
                openMenu();
            }
        }
    }

    openMenu = function() {
        if ($('.flip-card').hasClass('is-open') === false) {
            side = 'back';
            $('.flip-card-back').show();
            setSideHeight('.back-insider');
            $(".flip-card").addClass("is-open");
            $('#newshare').removeClass('share-button').addClass('close-button');
            $('#newshare i').removeClass('fa-share-alt').addClass('fa-close');
        }
    }

    closeMenu = function() {
        if ($('.flip-card').hasClass('is-open') === true) {
            side = 'front';
            setSideHeight('.front-insider');
            $(".flip-card").removeClass("is-open");
            $('#newshare').removeClass('close-button').addClass('share-button');
            $('#newshare i').removeClass('fa-close').addClass('fa-share-alt');
            if (typeof(flipDelay) !== 'undefined' && flipDelay > 0) {
                annule = setTimeout(closeMenuFade, flipDelay);
            } else {
                closeMenuFade();
            }
        }
    }

    closeMenuFade = function() {
        $('.flip-card-back').hide();
    }

    setSideHeight = function(zone, valeur) {
        defaultValue = $('.flip-card-front, .flip-card-back').css("height", (valeur ? valeur : (document.querySelector(zone) ? document.querySelector(zone).offsetHeight + "px" : 'auto')));
    }

    onloadinit = function() {
        $('.flip-card-front, .flip-card-back').addClass('notransition').css("height", (side && document.querySelector('.' + side + '-insider') ? document.querySelector('.' + side + '-insider').offsetHeight : '500') + "px").removeClass('notransition');
    }

    onresizeinit = function() {
        if ($('.flip-card').hasClass('is-open') === false) {
            setSideHeight('.front-insider');
        } else {
            setSideHeight('.back-insider');
        }
    }

    if (navigator.share) {
        $('.targets').hide();
        $('.dialog-title').hide();
    } else {
        $('#webapp-share').hide();
    }

    window.oncontextmenu = function() {
        if (GlobalClose) {
            footerClose();
        } else if ($('.flip-card-back').length > 0) {
            toggleMenu();
            // footerOpen('PopupExchange');
        }
        return false;
    }

    $(document).on('click', ".share-button", function(event) {
        toggleMenu();
    });

    $(document).on('click', ".close-button", function(event) {
        toggleMenu();
    });

    if (navigator.share) {
        $(document).on('click', "#webapp-share", function(event) {
            navigator.share({
                    // title: document.title,
                    title: $('body').data('name'),
                    text: $('#medusa').text(),
                    url: $('body').data('id'),
                })
                .then(function() {
                    console.log("Successful sharing!");
                })
                .catch(function(e) {
                    if (e.toString().substring(0, 15) == 'NotAllowedError') {
                        openMenu();
                    }
                });
        });
    }


    $("button#paypalbtn").paynow({
        type: "buynow",
        style: "default"
    });

    if ($('#clipboard').length > 0) {
        var clipboard = new ClipboardJS('#clipboard');
        $('#clipboard #msgDone').hide();

        clipboard.on('success', function(e) {
            $('#clipboard #msgLink').hide();
            $('#clipboard #msgDone').show();
            var intervalID = window.setInterval(function() {
                $('#clipboard #msgLink').show();
                $('#clipboard #msgDone').hide();
                window.clearInterval(intervalID);
            }, 1000);
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('error');
        });
    }

    //	menu.css('transform', 'rotate(0deg)');
    //	menu.css('webkitTransform', 'rotate(0deg)');
    //	toggle.parent().addClass('ss_active');
    //	toggle.addClass('close');
    //	toggle.data('rot', 0);

    if ($('#Receveur').length > 0) {
        $('#Receveur').html($('.PremierSet').html());
        $('.PremierSet').html('');
    }

    window.onload = onloadinit;
    window.onresize = onresizeinit;
    onloadinit();
});

function status() {
    console.log(document.title + "'s CARD is fully loaded");
    console.log("- " + $("div").length + " layers");
    console.log("- " + $("a").length + " links");
}
