const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('white');
  } else {
    header.classList.remove('white');
  }
});

window.onload = function() {
  var sectionTitle = document.querySelector('.section-title');
  var sectionLine = document.querySelector('.section-line');

  var titleWidth = sectionTitle.offsetWidth;
  var lineWidth = sectionLine.offsetWidth;

  if (titleWidth > lineWidth) {
    sectionLine.style.width = titleWidth + 'px';
  } else {
    sectionTitle.style.width = lineWidth + 'px';
  }
}
function initMap() {
  var location = { lat: 40.712776, lng: -74.005974 };

  var mapOptions = {
    zoom: 12,
    center: location
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
