$('.banner_slider').slick({
    infinite: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:1900,
    // autoplay: true,
    arrows:false,
  });
// ==========================banner_part start===============================

// ==========================skinshort_part start===============================

$('.skinshort_banner_slider').slick({
    infinite: true,
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed:1900,
    // autoplay: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // ======================================veno_box tart=================================
// ==========================feather_part start===============================
  $('.test_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.img_slider',
    fade: true,
    arrows:false,
  });
  $('.img_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    asNavFor: '.test_slider',
    arrows:false,
    
  });
   // ===================STICKY MENU START=================
   $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('#main_menu').addClass('sticky')
    } else{
        $('#main_menu').removeClass('sticky')
    }
  });
  // ===================STICKY MENU END=================
  // ===================main hover start=================
  $(".box_btn").click(function(){
    $(".main_overlay").addClass("box_remove")
    })
    
  // ===================main hover END=================
// ================venobox===============
  new VenoBox({
    selector: '.venobox'
  });


 