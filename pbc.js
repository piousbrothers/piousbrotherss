function goToNextPage() {
window.location.href = "playlist.html";
}

function goToNextPage1() {
window.location.href = "class.html";
}

function goToNextPage2() {
window.location.href = "sunna.html";
}

function goToNextPage3() {
window.location.href = "day.html";
}

function goToNextPage4() {
window.location.href = "reels.html";
}

function prophet() {
    window.location.href = "prophet.html";
}

function qurhan(){
    window.location.href ="qurhan.html";
}

function umarmoulavi() {
  window.location.href = "umarmoulavi.html";
}
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
function goToNextPage5() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScA8ItnYPBohw6HoQzIMoBDxB2Nryz7y74mtRTQa9ejWU3nfg/viewform?usp=sharing";
}
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
function goToNextPage6() {
  window.location.href = "level2.html";
}
function goToNextPage7() {
  window.location.href = "level3.html";
}
function openPopup1() {
  document.getElementById('popup1').style.display = 'flex';
}
function closePopup1() {
  document.getElementById('popup1').style.display = 'none';
}

const videoSlides = document.querySelectorAll('.video-slide');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentSlideIndex = 0;
videoSlides[0].classList.add('active');
videoSlides[0].querySelector('video').play();
prevButton.addEventListener('click', () => {
  pauseAllVideos();
  currentSlideIndex = (currentSlideIndex - 1 + videoSlides.length) % videoSlides.length;
  showCurrentSlide();
});

nextButton.addEventListener('click', () => {
  pauseAllVideos();
  currentSlideIndex = (currentSlideIndex + 1) % videoSlides.length;
  showCurrentSlide();
});
function pauseAllVideos() {
  videoSlides.forEach((slide) => {
    slide.querySelector('video').pause();
  });
}

function showCurrentSlide() {
  videoSlides.forEach((slide) => {
    slide.classList.remove('active');
  });
  videoSlides[currentSlideIndex].classList.add('active');
  videoSlides[currentSlideIndex].querySelector('video').play();
}
