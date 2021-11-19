const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}


const videoBtn = document.querySelector("#video-story-button");
const videoFile = document.querySelector("#video-story");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
//const videoIconBlock = document.querySelector(".promo-video__play-btn");


videoBtn.addEventListener("click", function() {
  
  videoBtn.style.display = "block";
 
  function toggleOverlay(event) {
    if(event.type === "mouseleave"){
      videoBtn.classList.add("hidden");
    }
  }
  
  
  function toggleEnter(event) {
    if(event.type === "mouseenter"){
      videoBtn.classList.remove("hidden");
    } 
  }
  
  if(videoFile.paused){
    videoFile.play();
    videoBtnIcon.src = "./img/Pause.svg";
    videoBtn.onmouseleave = toggleOverlay;
    videoBtn.onmouseenter = toggleEnter;
    
  }else {
    videoFile.pause();
    videoBtnIcon.src = "./img/play.svg";
     videoBtn.onmouseleave = toggleOverlay;
    videoBtn.onmouseenter = toggleEnter;
  }
 
})

$(".numbers__value").each(function() {
  $(this).attr("Counter", 0).animate({
    
    Counter:$(this).text()
  }, {
    duration: 16000,
    easing: 'swing',
    step: function(now){
      $(this).text(Math.ceil(now));
    }
  });
  
});


const text = document.querySelector(".text");

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});




