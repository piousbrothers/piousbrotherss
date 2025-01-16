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
let currentSlideIndex = 1;
  showSlide(currentSlideIndex);

function changeSlide(n) {
  showSlide(currentSlideIndex += n);
}

function setSlide(n) {
  showSlide(currentSlideIndex = n);
}

function showSlide(n)
{
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
      
if (n > slides.length) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = slides.length;
      
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
      
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
      
  slides[currentSlideIndex - 1].style.display = "block";
  dots[currentSlideIndex - 1].className += " active";
}