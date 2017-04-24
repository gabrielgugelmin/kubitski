$(function(){
  //clickOutsideMenu();

  // MENU
  // click no hamburguer icon
  $('.MenuTrigger').on('click', function(e){
    e.preventDefault();   

    if( $('.Menu').hasClass('is-open') ){
      closeMenu();
    } else{
      openMenu();
    }
  });

  // AJUSTA O TAMANHO DO BANNER
	wH = $(window).height();

	$('.js-fullHeight').css({height: wH});

	$(window).resize(function() {
    wH = $(window).height();
		$('.js-fullHeight').css({height: wH});			    
	});

  $(window).scroll(function(){
    
    if( $(this).scrollTop() > wH ){
      $('.Header').addClass('is-scrolling');
    } else{
    	$('.Header').removeClass('is-scrolling');
    }
  });


  // SMOOTH SCROLL
  $('.js-scroll').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function closeMenu(){
  $('.Menu').removeClass('is-open');
  $('.MenuTrigger').removeClass('is-open');
  $('body').removeClass('overflowHidden');
}

function openMenu(){
  $('.MenuTrigger').addClass('is-open');
  $('.Menu').addClass('is-open');
  $('body').addClass('overflowHidden');
}

function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

function checkWindowWidth(){
  var w = viewport().width;
  var size = '';
  if(w > 991){
    size = 'desktop';
  } else{
    size = 'mobile';
  }

  return size;
}

function clickOutsideMenu(){

  $(document).on('mouseup', function (e){ 
    var elem = $('.Menu');

    if (!elem.is(e.target) && elem.has(e.target).length === 0){
      closeMenu();
    }
  });
}

