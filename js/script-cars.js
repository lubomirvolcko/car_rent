function setGolf() {
    openModal(1);
}

function setYaris() {
    openModal(2);
}

function setCivic() {
    openModal(3);
}

function setBolt() {
    openModal(4);
}

function setFocus() {
    openModal(5);
}

function setRio() {
    openModal(6);
}

function setElantra() {
    openModal(7);
}

function setAudi() {
    openModal(8);
}

function setBmw() {
    openModal(9);
}

function setBentley() {
    openModal(10);
}

function setWraith() {
    openModal(11);
}

function setGiulia() {
    openModal(12);
}

function setGenesis() {
    openModal(13);
}

function setMercedes() {
    openModal(14);
}

function setCayman() {
    openModal(15);
}

function setLexus() {
    openModal(16);
}

function setTesla() {
    openModal(17);
}

function openModal(x) {
    $("#myModal").css("display", "block");
    switch (x) {
        case 1: $('.img1').attr("src", "img/pageCars/economy/golf/golf1.png");
                $('.img2').attr("src", "img/pageCars/economy/golf/golf2.png");
                $('.img3').attr("src", "img/pageCars/economy/golf/golf3.png");
                $('.img4').attr("src", "img/pageCars/economy/golf/golf4.png");
                $('.name').attr("alt", "Volkswagen Golf");
                break;
        case 2: $('.img1').attr("src", "img/pageCars/economy/yaris/yaris1.png");
                $('.img2').attr("src", "img/pageCars/economy/yaris/yaris2.png");
                $('.img3').attr("src", "img/pageCars/economy/yaris/yaris3.png");
                $('.img4').attr("src", "img/pageCars/economy/yaris/yaris4.png");
                $('.name').attr("alt", "Toyota Yaris");
                break;
        case 3: $('.img1').attr("src", "img/pageCars/economy/civic/civic1.png");
                $('.img2').attr("src", "img/pageCars/economy/civic/civic2.png");
                $('.img3').attr("src", "img/pageCars/economy/civic/civic3.png");
                $('.img4').attr("src", "img/pageCars/economy/civic/civic4.jpg");
                $('.name').attr("alt", "Honda Civic");
                break;
        case 4: $('.img1').attr("src", "img/pageCars/economy/bolt/bolt1.png");
                $('.img2').attr("src", "img/pageCars/economy/bolt/bolt2.png");
                $('.img3').attr("src", "img/pageCars/economy/bolt/bolt3.png");
                $('.img4').attr("src", "img/pageCars/economy/bolt/bolt4.png");
                $('.name').attr("alt", "Chevrolet Bolt EV");
                break;
        case 5: $('.img1').attr("src", "img/pageCars/economy/focus/focus1.png");
                $('.img2').attr("src", "img/pageCars/economy/focus/focus2.png");
                $('.img3').attr("src", "img/pageCars/economy/focus/focus3.png");
                $('.img4').attr("src", "img/pageCars/economy/focus/focus4.jpg");
                $('.name').attr("alt", "Ford Focus ST");
                break;
        case 6: $('.img1').attr("src", "img/pageCars/economy/rio/rio1.png");
                $('.img2').attr("src", "img/pageCars/economyrio/rio2.png");
                $('.img3').attr("src", "img/pageCars/economyrio/rio3.png");
                $('.img4').attr("src", "img/pageCars/economy/rio/rio4.jpg");
                $('.name').attr("alt", "Kia Rio");
                break;
        case 7: $('.img1').attr("src", "img/pageCars/economy/elantra/elantra1.png");
                $('.img2').attr("src", "img/pageCars/economy/elantra/elantra2.png");
                $('.img3').attr("src", "img/pageCars/economy/elantra/elantra3.png");
                $('.img4').attr("src", "img/pageCars/economy/elantra/elantra4.jpg");
                $('.name').attr("alt", "Hyundai Elantra");
                break;
        case 8: $('.img1').attr("src", "img/pageCars/luxury/audi/audi1.png");
                $('.img2').attr("src", "img/pageCars/luxury/audi/audi2.png");
                $('.img3').attr("src", "img/pageCars/luxury/audi/audi3.png");
                $('.img4').attr("src", "img/pageCars/luxury/audi/audi4.jpg");
                $('.name').attr("alt", "Audi A8");
                break;
        case 9: $('.img1').attr("src", "img/pageCars/luxury/bmw/bmw1.png");
                $('.img2').attr("src", "img/pageCars/luxury/bmw/bmw2.png");
                $('.img3').attr("src", "img/pageCars/luxury/bmw/bmw3.jpg");
                $('.img4').attr("src", "img/pageCars/luxury/bmw/bmw4.jpg");
                $('.name').attr("alt", "Bmw X6");
                break;
        case 10: $('.img1').attr("src", "img/pageCars/luxury/bentley/bentley1.png");
                $('.img2').attr("src", "img/pageCars/luxury/bentley/bentley2.png");
                $('.img3').attr("src", "img/pageCars/luxury/bentley/bentley3.png");
                $('.img4').attr("src", "img/pageCars/luxury/bentley/bentley4.jpg");
                $('.name').attr("alt", "Bentley Mulsanne");
                break;
        case 11: $('.img1').attr("src", "img/pageCars/luxury/wraith/wraith1.png");
                $('.img2').attr("src", "img/pageCars/luxury/wraith/wraith2.png");
                $('.img3').attr("src", "img/pageCars/luxury/wraith/wraith3.png");
                $('.img4').attr("src", "img/pageCars/luxury/wraith/wraith4.jpg");
                $('.name').attr("alt", "Rolls-Royce Wraith");
                break;
        case 12: $('.img1').attr("src", "img/pageCars/luxury/giulia/giulia1.png");
                $('.img2').attr("src", "img/pageCars/luxury/giulia/giulia2.png");
                $('.img3').attr("src", "img/pageCars/luxury/giulia/giulia3.png");
                $('.img4').attr("src", "img/pageCars/luxury/giulia/giulia4.jpg");
                $('.name').attr("alt", "Alfa Romeo Giulia");
                break;
        case 13: $('.img1').attr("src", "img/pageCars/luxury/genesis/genesis1.png");
                $('.img2').attr("src", "img/pageCars/luxury/genesis/genesis2.png");
                $('.img3').attr("src", "img/pageCars/luxury/genesis/genesis3.jpg");
                $('.img4').attr("src", "img/pageCars/luxury/genesis/genesis4.jpg");
                $('.name').attr("alt", "Genesis G90");
                break;
        case 14: $('.img1').attr("src", "img/pageCars/luxury/mercedes/mercedes1.png");
                $('.img2').attr("src", "img/pageCars/luxury/mercedes/mercedes2.png");
                $('.img3').attr("src", "img/pageCars/luxury/mercedes/mercedes3.png");
                $('.img4').attr("src", "img/pageCars/luxury/mercedes/mercedes4.png");
                $('.name').attr("alt", "Mercedes Benz S-CLASS");
                break;
        case 15: $('.img1').attr("src", "img/pageCars/luxury/cayman/cayman1.png");
                $('.img2').attr("src", "img/pageCars/luxury/cayman/cayman2.png");
                $('.img3').attr("src", "img/pageCars/luxury/cayman/cayman3.png");
                $('.img4').attr("src", "img/pageCars/luxury/cayman/cayman4.jpg");
                $('.name').attr("alt", "Porsche Cayman");
                break;
        case 16: $('.img1').attr("src", "img/pageCars/luxury/lexus/lexus1.png");
                $('.img2').attr("src", "img/pageCars/luxury/lexus/lexus2.png");
                $('.img3').attr("src", "img/pageCars/luxury/lexus/lexus3.png");
                $('.img4').attr("src", "img/pageCars/luxury/lexus/lexus4.jpg");
                $('.name').attr("alt", "Lexus GS");
                break;
        case 17: $('.img1').attr("src", "img/pageCars/luxury/tesla/tesla1.png");
                $('.img2').attr("src", "img/pageCars/luxury/tesla/tesla2.png");
                $('.img3').attr("src", "img/pageCars/luxury/tesla/tesla3.jpg");
                $('.img4').attr("src", "img/pageCars/luxury/tesla/tesla4.jpg");
                $('.name').attr("alt", "Tesla Model S");
                break;
        default: break;
    }
    
}

function closeModal() {
    $("#myModal").css("display", "none");
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}