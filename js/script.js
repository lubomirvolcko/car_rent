 $(document).ready(function() {
 	var ba=$("#ba").val();

 $("#ba").click(function(){
var city = "Bratislava";
var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
urllink=urllink + city;
 urllink=urllink+'&appid=9f3132ee22da51a2a27391d8a89eb76f';
console.log(urllink);

   $.ajax({
         url: urllink,
         data : { format: 'json' } ,
         error : function(){
        
         },
         dataType: 'json',
         success : function(data)
         {
  var firstcoord=data.coord.lon;
            var secondcoord=data.coord.lat;
            console.log(firstcoord+","+secondcoord);
  

  var uluru = {lat: secondcoord, lng:firstcoord};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

           
         },
         type: 'GET'


















});
});
});