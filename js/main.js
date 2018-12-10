$(document).ready(function () {

  // init video1
  var controller = new ScrollMagic.Controller();
    //build
    var video1 = new ScrollMagic.Scene({
      triggerElement: ".videos1",
      triggerHook: 0.6
    })
    .setClassToggle(".videos1", 'videos-appear')//add class
    //.addIndicators({name: "Video1"})
    .addTo(controller);

    // init video2
    //build
    var video2 = new ScrollMagic.Scene({
      triggerElement: ".videos2",
      triggerHook: 0.58
    })
    .setClassToggle(".videos2", 'videos-appear2')//add class
    //.addIndicators({name: "Video2"})
    .addTo(controller);

    // init video3
    //build
    var video3 = new ScrollMagic.Scene({
      triggerElement: ".videos3",
      triggerHook: 0.58
    })
    .setClassToggle(".videos3", 'videos-appear3')//add class
    //.addIndicators({name: "Video3"})
    .addTo(controller);

    // init video4
      //build
      var video4 = new ScrollMagic.Scene({
        triggerElement: ".videos4",
        triggerHook: 0.58
      })
      .setClassToggle(".videos4", 'videos-appear-normalized')//add class
      //.addIndicators({name: "Video4"})
      .addTo(controller);

      // init video5
        //build
        var video5 = new ScrollMagic.Scene({
          triggerElement: ".videos5",
          triggerHook: 0.58
        })
        .setClassToggle(".videos5", 'videos-appear-normalized')//add class
        //.addIndicators({name: "Video5"})
        .addTo(controller);

        // init video6
          //build
          var video6 = new ScrollMagic.Scene({
            triggerElement: ".videos6",
            triggerHook: 0.58
          })
          .setClassToggle(".videos6", 'videos-appear-normalized')//add class
          //.addIndicators({name: "Video6"})
          .addTo(controller);

    // Responsive duration bycicle
    var $window = $(window);
    function checkingWidht() {
      var windowsize = $window.width();
      if (windowsize > 991.98) {
        var cicla = new ScrollMagic.Scene({
          triggerElement: '.cicla',
          duration:"700%",
          triggerHook: 0.4
        })
        .setPin(".cicla")
        //.addIndicators({name: "Cicla (duration: 700%)"}) // add indicators (requires plugin)
        .addTo(controller);
      }else if (windowsize <= 1199.98 && windowsize >= 992) {
        var cicla = new ScrollMagic.Scene({
          triggerElement: '.cicla',
          duration:"600%",
          triggerHook: 0.4
        })
        .setPin(".cicla")
        //.addIndicators({name: "Cicla_lg (duration: 600%)"}) // add indicators (requires plugin)
        .addTo(controller);
      }else {
        var cicla = new ScrollMagic.Scene({
          triggerElement: '.cicla',
          duration:"800%",
          triggerHook: 0.4
        })
        .setPin(".cicla")
        //.addIndicators({name: "Cicla_md (duration: 800%)"}) // add indicators (requires plugin)
        .addTo(controller);
      }
    }
    // Execute on load
    checkingWidht();

    // Scroll animation bycicle
    setInterval(function() {
        var tempscroll = $(window).scrollTop();
        setTimeout(function() {
        if (tempscroll == $(window).scrollTop()) {
            $(".cicla").removeClass("scrolling");
        } else {
            $(".cicla").addClass("scrolling");
        }
        }, 75);
    });

  //Link animation
  $(function() {
    $('a[href*=faq]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

});
