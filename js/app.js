
/*función desaparecer contenedor
$(document).ready(function() {
    setTimeout(function() {
        $(".splash-view").fadeOut(1500);
    },3000);
});

/*función aparecer contenedor
$(document).ready(function() {
    setTimeout(function() {
        $(".principal-view").fadeIn(2000);
    },4500);
}); */

/*mapa*/
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.420454, lng: -99.163114},
          zoom: 8
        });
      }
