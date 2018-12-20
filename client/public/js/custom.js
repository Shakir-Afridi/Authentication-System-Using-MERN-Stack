$(document).on('click', '.nav-tabs li', function() {
    $(".nav-tabs li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on('click', '.mysidenav li', function() {
    $(".mysidenav li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on('click', '#SideNavClose li', function() {
    $("#SideNavClose li").removeClass("active");
    $(this).addClass("active");
    $('#SideNavClose').css("height", "0px")
    $('#SideNavClose ul li').css("visibility","hidden");
    $('#SideNavClose ul li').css("opacity","0");
  });

  $(document).on('click', '#bars', function(){
      if ($("#SideNavClose").height() == 0){
        $('#SideNavClose').css("height", "510px")
        $('#SideNavClose ul li').css("visibility","visible");
        $('#SideNavClose ul li').css("opacity","1");
      } else {
        $('#SideNavClose').css("height", "0px")
        $('#SideNavClose ul li').css("visibility","hidden");
        $('#SideNavClose ul li').css("opacity","0");
      }
  });

  $(document).on('click', '#SideNavBars', function(){
    if($('.mysidenav').width() === 280){
      $('.mysidenav').css("width", "3.8%")
      $('#mainBodyComp').css("margin-left", "65px")
      $('#SideNavBars').removeClass("fa fa-bars")
      $('#SideNavBars').addClass("fa fa-times")
    } else {
      $('.mysidenav').css("width", "280px")
      $('#mainBodyComp').css("margin-left", "295px")
      $('#SideNavBars').removeClass("fa fa-timess")
      $('#SideNavBars').addClass("fa fa-bars")
    }
  });

  // $(document).on('hover', ".mysidenav li", function(){
  //   $(this).css("width", "260px");
  // })