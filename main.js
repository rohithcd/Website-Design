//slide
var i=0;
var img = [];

img[0] = "images/img01.jpg";
img[1] = "images/img02.jpg";
img[2] = "images/img04.jpg";
img[3] = "images/img05.jpg";
img[4] = "images/img06.jpg";
img[5] = "images/img08.jpg";

var rtransform = document.querySelector('#scroll');

document.getElementById('slider-r').addEventListener("click", function()
{
		/* rtransform.style.transform = "translate(-150%, -52%)"; */

		if(i < img.length - 1)
		{
			i++;
		}
		else
		{
			i=0;
		}
		 
  
  
   
   		rtransform.src = img[i];
});


document.getElementById('slider-l').addEventListener("click", function()
{
		if(i > 0)
		{
			i--
		}

		else
		{
			i= img.length -1;
		}
		
   document.querySelector('#scroll').src = img[i];
});