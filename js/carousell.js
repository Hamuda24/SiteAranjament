var numberOfSlide = 4; 
var sliderImages=[];
var sliderUrls=[];
var autoSlide = false;
document.addEventListener("DOMContentLoaded", function(event) {
    var eaSlider=document.getElementById('ea-slider');
    eaSlider.setAttribute('style',"transform: translate(-162%)");
    var sliderPosition = -162;
    var sliderCurrentSlide = 1;
document.getElementById('slideLeft').addEventListener("click", function(){ 

  if( sliderCurrentSlide < numberOfSlide  &&  sliderCurrentSlide > 0){
    sliderCurrentSlide-=1;
      sliderPosition+=85;
  }
else{
   sliderPosition-=3 * 85;
  sliderCurrentSlide+=3 * 1;
}

eaSlider.setAttribute('style',"transform: translate("+sliderPosition+"%);");
  

});

document.getElementById('slideRight').addEventListener("click", function(){ 
  
    if( sliderCurrentSlide < numberOfSlide-1  ){
        sliderCurrentSlide+=1;
        sliderPosition-=85;}

      else{
        sliderCurrentSlide -= 3 * 1;
        sliderPosition+= 3 * 85;
      
    }

eaSlider.setAttribute('style',"transform: translate("+sliderPosition+"%);");
  
  

});
  });