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

  // ANYONE
  $('.js-sliderAnyone').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    draggable: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 10
  });


  // CONTACT
  $('.js-openContact').on('click', function(){
    $('.Contact__overlay').addClass('is-open');
    $('body').addClass('overflowHidden');
  });

  $('.Contact__close').on('click', function(){
    $('.Contact__overlay').removeClass('is-open');
    $('body').removeClass('overflowHidden');
  });


  // FORM
  $('.js-submitForm').on('click', function (e) {

    e.preventDefault();
    var qtdErro = 0;

    $(this).parents('.Form').find('[data-validate=true]').each(function () {
      var value = $.trim($(this).find('input, textarea').val());
      if (!value.length > 0) {
        $(this).addClass('error');
        qtdErro++;
      }
    });

    if (qtdErro == 0) {
      return $.ajax({
        type: "POST",
        url: "/ajax/contato.php",
        data: $(this).serialize(),
        success: function (data) {
          if (data === "success") {
            console.log('Mensagem enviada com sucesso.');
            // Limpa o form
            $('.Form').trigger("reset");
          } else {
            console.log('Erro ao tentar enviar mensagem: ' + data);
          }
        }
      });
    } else {
      console.log('Erro ao tentar enviar mensagem. Tente novamente.');
    }
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

