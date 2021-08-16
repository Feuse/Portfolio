$(document).ready(()=>{
  var slides = document.getElementsByClassName("image");
  slides[0].style.display = "block";
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          $('a').css('pointerEvents', 'none');
        event.preventDefault();
        var hash = this.hash; 
        $('html, body').animate({         
          scrollTop: $(hash).offset().top
      },
      1200, function(){          
             $('a').css('pointerEvents', 'auto');
        });    
      } 
    }); 
  });

  function zoom(e){
      var width = window.innerWidth;
console.log(width)
if(width > 700){
       var zoomer = e.currentTarget;
       e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
       e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
       x = offsetX/zoomer.offsetWidth*100
       y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
    
  }
}

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {

var i;
var slides = document.getElementsByClassName("image");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
if(slides[slideIndex-1]){
  slides[slideIndex-1].style.display = "block";
}

}