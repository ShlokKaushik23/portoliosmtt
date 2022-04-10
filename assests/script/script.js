// ==== LOGO SIZE CHANGE
$(function() { var logo = $(".logo"); $(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 550) {
      if(!logo.hasClass("sml-logo")) {
        logo.hide();
        logo.removeClass('logo').addClass("sml-logo").fadeIn(200 ,"linear");
      }
    } else {
      if(!logo.hasClass("logo")) {
        logo.hide();
        logo.removeClass("sml-logo").addClass('logo').fadeIn( "fast");
      }
    }

});
});


// ======== ACTIVE NAVBAR




// ========== GREEN BANNER STICKY


$(window).scroll(function() {
var scroll = $(window).scrollTop();

if (scroll >= 580) {
    $(".greenplate").addClass("fixedPos");
}
else{

    $(".greenplate").removeClass("fixedPos");
}
 });




 $(window).scroll(function() {
 var scroll = $(window).scrollTop();

 if (scroll >= 1180) {
     $(".greenplate_tab").addClass("fixedPos");
 }
 else{

     $(".greenplate_tab").removeClass("fixedPos");
 }
  });



// ========== CONTACT PAGE GREEN BANNER ============
$(window).scroll(function() {
var scroll = $(window).scrollTop();

if (scroll >= 180) {
    $(".greenplate_contact").addClass("fixedPos");
}
else{

    $(".greenplate_contact").removeClass("fixedPos");
}
 });







   $(window).scroll(function() {
   var scroll = $(window).scrollTop();

   if (scroll >= 470) {
       $(".cover_section").addClass("fixed_cover");
   }
   else{

       $(".cover_section").removeClass("fixed_cover");
   }
    });



// ===== NAV CONTAINER =========

var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
    $('body').removeClass('dark');

		$('body').removeClass('menu-open');
	} else {
    $(this).addClass('active');
		$('body').addClass('dark');

		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});

var toggleButton = document.getElementById('toggle');

toggleButton.addEventListener("click", myFunction );

function myFunction(){
  document.getElementById('nav_section').style.display = "block";

}

toggleButton.addEventListener("dblclick", myRemove);

function myRemove() {
  document.getElementById('nav_section').style.display = "none";
}





var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
//showSlidesCurrent(slideIndexCurrent);

function currentSlide(n) {
showSlidesCurrent(slideIndexCurrent = n);

}


/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
showSlidesCurrent(slideIndexCurrent = n);

}

function showSlidesCurrent(n) {
//var slideIndex = 1;
var i;
var slides = document.getElementsByClassName("mySlides");

if (n > slides.length) {slideIndexCurrent = 1}

if (n < 0) {slideIndexCurrent = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideIndex++;

slides[slideIndexCurrent-1].style.display = "block";

slideIndexCurrent++;
}


/*** SHOW SLIDE with timer ***/
function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}

slides[slideIndex-1].style.display = "block";


setTimeout(showSlides, 12000); // Change image every x seconds
}



//  showSlidesCurrent(slideIndexCurrent);


// ===== MOBILE SLDER =====

var slideIndexMobile = 0;
var slideIndexCurrentMobile = 0;
showSlidesMobile();
//showSlidesCurrent(slideIndexCurrent);

function currentSlideMobile(p) {
showSlidesCurrentMobile(slideIndexCurrentMobile = n);

}


/*** CURRENT SLIDE on click ***/
function currentSlideMobile(p) {
showSlidesCurrentMobile(slideIndexCurrentMobile = n);

}

function showSlidesCurrentMobile(p) {
//var slideIndex = 1;
var j;
var slidesMobile = document.getElementsByClassName("mySlides_mobile");

if (p > slidesMobile.length) {slideIndexCurrentMobile = 1}

if (p < 0) {slideIndexCurrentMobile = slidesMobile.length}
for (j = 0; i < slidesMobile.length; j++) {
  slidesMobile[j].style.display = "none";
}
slideIndexMobile++;

slides[slideIndexCurrentMobile-1].style.display = "block";

slideIndexCurrentMobile++;
}


/*** SHOW SLIDE with timer ***/
function showSlidesMobile() {
var j;
var slidesMobile = document.getElementsByClassName("mySlides_mobile");

for (j = 0; j < slidesMobile.length; j++) {
  slidesMobile[j].style.display = "none";
}
slideIndexMobile++;
if (slideIndexMobile > slidesMobile.length) {slideIndexMobile = 1}

slidesMobile[slideIndexMobile -1].style.display = "block";


setTimeout(showSlidesMobile, 12000); // Change image every x seconds
}
