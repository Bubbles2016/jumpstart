$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  /*Function to hide the navigation bar when the user scroll down the page*/
  var lastScrollTop = 0;
  $(window).scroll(function(){  /*When the user scrolls down....*/
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){ /*If the user scrolls down more than 50px, we need to hide the nav bar by giving negative value to Top i.e: the nav bar will disappears*/
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) { /*If the user scrolls less than 50px then no need to hide the navbar*/
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });
});
