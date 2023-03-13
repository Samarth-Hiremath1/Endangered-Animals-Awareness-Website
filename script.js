function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 0, lng: 0 },
    //center: myLatLng
    styles: [
      { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#D3D3D3" }] },
      { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#0000ff" }] },
      { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "off" }] },
      { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] },
      { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] },
    ]
  });
  // Copy this code using variable names
  var image1 = {
    url: "https://www.waza.org/wp-content/uploads/2019/02/gsmp-amur-leopard-cub-wz-1024x684.jpg",
    scaledSize: new google.maps.Size(30, 30),
  };
  var marker1 = new google.maps.Marker({
    position: { lat: 43.471, lng: 128.388 },
    map: map,
    title: 'Amur Leopard',
    icon: image1,
  });

  var image2 = {
    url: "https://voiceforthespeechless.com/wp-content/uploads/2017/02/hawksbill-seaturtle.png",
    scaledSize: new google.maps.Size(30, 30),
  };
  var marker2 = new google.maps.Marker({
    position: { lat: 34, lng: -52 },
    map: map,
    title: 'Hawksbill Sea Turtle',
    icon: image2,
  });
  var image3 = {
    url: "hector.jpg",
    scaledSize: new google.maps.Size(30, 30),
  };
  var marker3 = new google.maps.Marker({
    position: { lat: -40.29, lng: 173.176 },
    map: map,
    title: 'Hectors Dolphin',
    icon: image3,
  });

  var image4 = {
    url: "whiterhino.jpg",
    scaledSize: new google.maps.Size(30, 30),
  };
  var marker4 = new google.maps.Marker({
    position: { lat: -26, lng: 23.7 },
    map: map,
    title: 'White Rhino',
    icon: image4,
  });
  var image5 = {
    url: "blackrhino.jpg",
    scaledSize: new google.maps.Size(30, 30),
  };
  var marker5 = new google.maps.Marker({
    position: { lat: 5.72, lng: 39.68 },
    map: map,
    title: 'Black Rhino',
    icon: image5,
  });
  marker1.addListener('click', function() {
          window.open("amur.html","_blank");
        });
  marker2.addListener('click', function() {
          window.open("hawksbill.html","_blank");
        });
  marker3.addListener('click', function() {
          window.open("hector.html","_blank");
        });
  marker4.addListener('click', function() {
          window.open("whiterhino.html","_blank");
        });
  marker5.addListener('click', function() {
          window.open("blackrhino.html","_blank");
        });
  
}








