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


    // muda cor do menu
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('.About').offset().top,
    elementHeight = $('.About').outerHeight() - 1;

    if( scrollTop >= elementOffset && scrollTop <= (elementOffset + elementHeight) ){
      $('.MenuTrigger').addClass('is-blue');
    } else{
      $('.MenuTrigger').removeClass('is-blue');
    }
  });


  // SMOOTH SCROLL
  $('.js-scroll').on('click', function(event) {
    $('.Menu').removeClass('is-open');
    $('.MenuTrigger').removeClass('is-open');
    $('body').removeClass('overflowHidden');

    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      });
    } // End if
  });

  // ANYONE
  $('.js-sliderAnyone').slick({
    autoplay: true,
    autoplaySpeed: 500,
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

  // MASK
  $('.js-phone').mask('(99) 09999-9999', {placeholder: "(99) 99999-9999"});

  // MAPS

  function initialize() {

    var chicago = new google.maps.LatLng(-25.429198, -49.290121);
    var myOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: chicago,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ]
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    markerMuseu = new google.maps.Marker({
      position: new google.maps.LatLng(-25.429198, -49.290121),
      map: map,
      title: 'Kubitski Odontologia Estética',
      icon: 'assets/img/icons/marker.png'
    });

    var contentString = '<div class="InfoWindow">'+
      '<h1 class="InfoWindow__title">Kubitski Odontologia Estética</h1>'+
      '<div class="InfoWindow__content">'+
      '<p>R. Padre Anchieta, 1104 - Mercês, Curitiba - PR, 80410-020</p>'+
      '<p>(41) 3336.5455</p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

    markerMuseu.addListener('click', function() {
      infowindow.open(map, markerMuseu);
    });
  }

  if( $('#map').length ){
    initialize();
  }
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

