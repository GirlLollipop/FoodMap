
/*función desaparecer contenedor*/
$(document).ready(function() {
    setTimeout(function() {
        $(".splash-view").fadeOut(1500);
    },3000);
});

/*función aparecer contenedor*/
$(document).ready(function() {
    setTimeout(function() {
        $(".principal-view").fadeIn(2000);
    },4500);
});

/*mapa*/
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.420454, lng: -99.163114},
          zoom: 8
        });
      }

/*filtro tabla
$(document).ready(function(){
	$("#kwd_search").keyup(function(){
		if( $(this).val() != "")
		{
			$("#my-table tbody>tr").hide();
			$("#my-table td:contains-ci('" + $(this).val() + "')").parent("tr").show();
		}
		else
		{
			$("#my-table tbody>tr").show();
		}
	});
});

$.extend($.expr[":"],
{
    "contains-ci": function(elem, i, match, array)
	{
		return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});
*/
