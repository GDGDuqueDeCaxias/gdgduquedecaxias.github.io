$(document).ready(function () {
    $("body").on("click", ".nav-toggle", function () {
        $(".nav-menu").slideToggle();
    });
});
function gallery () {
  var elementLeft = document.getElementsByClassName('control__left')[0];
  var elementRight = document.getElementsByClassName('control__right')[0];
  var elementGallery = document.getElementsByClassName('gallery__images')[0];
  var minX = 0;
  var maxX = -(elementGallery.offsetWidth);
  
  elementLeft.addEventListener('click', function (e){
    if(minX > (maxX + 200)) {
      minX -= 200;
      console.log(minX);
      elementGallery.style.transform = "translateX("+minX+"px)";
    } else {
      minX = 0;
      console.log(minX);
      elementGallery.style.transform = "translateX("+minX+"px)";
    }
  })

  elementRight.addEventListener('click', function (e){
    if(minX )
    minX -= 200;
    console.log(minX);
    elementGallery.style.transform = "translateX("+minX+"px)";
  })

}

(function (){
    gallery();
    var inputs = document.getElementsByClassName('input')
    Array.prototype.forEach.call(inputs, function (item) {
     item.addEventListener('focus', function () {
       if (item.value === '') {
         var id = item.id
         var selector = '.label[for="'+ id + '"]'
         var label = document.querySelector(selector)
         item.classList.toggle('has-focus')
         label.classList.toggle('is-active')
       }
     })
     item.addEventListener('blur', function () {
       if (item.value === '') {
         var id = item.id
         var selector = '.label[for="'+ id + '"]'
         var label = document.querySelector(selector)
         item.classList.toggle('has-focus')
         label.classList.toggle('is-active')
       }
     })
    })

}());
