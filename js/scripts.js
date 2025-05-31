
console.log('DOM content loaded');
console.log('JS file loaded');

var shape1 = document.getElementById('shape1');
var shape2 = document.getElementById('shape2');
var shape3 = document.getElementById('shape3');
var shape4 = document.getElementById('shape4');
var shape5 = document.getElementById('shape5');
var shape6 = document.getElementById('shape6');

var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');
var container6 = document.getElementById('container6');

// i got help from ai to revise the shapes

shape1.addEventListener('click', function () {
  hideAllContainers();
  container1.style.display = 'block';
  scrollToElement(container1);
});

shape2.addEventListener('click', function () {
  hideAllContainers();
  container2.style.display = 'block';
  scrollToElement(container2);
});

shape3.addEventListener('click', function () {
  hideAllContainers();
  container3.style.display = 'block';
  scrollToElement(container3);
});

shape4.addEventListener('click', function () {
  hideAllContainers();
  container4.style.display = 'block';
  scrollToElement(container4);
});

shape5.addEventListener('click', function () {
  hideAllContainers();
  container5.style.display = 'block';
  scrollToElement(container5);
});

shape6.addEventListener('click', function () {
  hideAllContainers();
  container6.style.display = 'block';
  scrollToElement(container6);
});

function hideAllContainers() {
  container1.style.display = 'none';
  container2.style.display = 'none';
  container3.style.display = 'none';
  container4.style.display = 'none';
  container5.style.display = 'none';
  container6.style.display = 'none';
}

function scrollToElement(element) {
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Get references to buttons and popups
  var luzonButton = document.querySelector('.luzon-button');
  var visayasButton = document.querySelector('.visayas-button');
  var mindinaoButton = document.querySelector('.mindinao-button');

  var luzonPopup = document.querySelector('.luzon-popup');
  var visayasPopup = document.querySelector('.visayas-popup');
  var mindinaoPopup = document.querySelector('.mindinao-popup');

  // Add event listeners to buttons
  luzonButton.addEventListener('mouseenter', function () {
    toggleVisibility(luzonPopup, true);
  });
  luzonButton.addEventListener('mouseleave', function () {
    toggleVisibility(luzonPopup, false);
  });
  visayasButton.addEventListener('mouseenter', function () {
    toggleVisibility(visayasPopup, true);
  });
  visayasButton.addEventListener('mouseleave', function () {
    toggleVisibility(visayasPopup, false);
  });
  mindinaoButton.addEventListener('mouseenter', function () {
    toggleVisibility(mindinaoPopup, true);
  });
  mindinaoButton.addEventListener('mouseleave', function () {
    toggleVisibility(mindinaoPopup, false);
  });

  function toggleVisibility(element, show) {
    if (show) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
});


$(function () {
  console.log('JQuery is loaded')

  function checks_width() {
    if (window.innerWidth < 729) {
      alert('For the best experience, please view this app on a desktop.')
    }
  }

  checks_width();

});

var sourcesButton = document.getElementById('sources-button');
var sourcesModal = document.getElementById('sourcesModal');
var closeButton = document.getElementsByClassName('close-button')[0];
var bodyInfo = document.getElementById('body-info');

function showModal() {
  sourcesModal.style.display = 'block';
  bodyInfo.style.filter = 'blur(5px)';
}

function hideModal() {
  sourcesModal.style.display = 'none';
  bodyInfo.style.filter = 'none';
}

sourcesButton.addEventListener('click', showModal);

closeButton.addEventListener('click', hideModal);

window.addEventListener('click', function (event) {
  if (event.target == sourcesModal) {
    hideModal();
  }
});


