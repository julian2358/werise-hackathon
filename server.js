const express = require('express');
const app = express();

//port 
const PORT = process.env.PORT || 3000;


//test
app.get('/', (req, res) => {
        res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
}); 




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
  var slides = document.getElementsByClassName("mySlides");

  // if you go over slides.length reset back to first index
  if (n > slides.length) {slideIndex = 1}

// if you go under index 1 set slides index to the last slide 
  if (n < 1) {slideIndex = slides.length}

  //itterate through slides and set display to none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 //set display to block for current slide index
  slides[slideIndex-1].style.display = "block";
  
}