 $(document).ready(function() {
 	var ba=$("#ba").val();

 $("#ba").click(function(){
var city = "Bratislava";
var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
urllink=urllink + city;
urllink=urllink+'&appid=9f3132ee22da51a2a27391d8a89eb76f';
console.log(urllink);

  

  var uluru = {lat:48.15, lng:17.11};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

           
         });


  $("#bb").click(function(){
var city = "Bratislava";
var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
urllink=urllink + city;
urllink=urllink+'&appid=9f3132ee22da51a2a27391d8a89eb76f';
console.log(urllink);

  

  var uluru = {lat:48.73, lng:19.14};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

           
         });



   $("#ke").click(function(){
        var uluru = {lat:48.71, lng:21.25};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

           
         });


    $("#wien").click(function(){

    var uluru = {lat:48.21, lng:16.37};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

           
         });
    
//READ DATA FROM DATABASE-----------------------------------------------------------------------------------

    $("#cat").change(function(){
      
      $.ajax({

    url: 'http://localhost:8080/rent/car/'+$(this).val(),
     
    data:null,
    contentType:'application/json',
    crossDomain: true,
    dataType: 'jsonp',
    
    jsonpCallback:'getCars',
    contentType:'application/json',
    success: getCars,
   type:'GET'
   



        
     });   
 


 function getCars(data)
{    console.log(data);
    var temp=data.cars;
    
     $("#dbcar").empty();
     for(var i = 0;i<temp.length;i++){
        var option = document.createElement("option");
         var ajaxprint = document.createTextNode(temp[i]);
         option.appendChild(ajaxprint);
         document.getElementById("dbcar").appendChild(option);
     }
   
      
}

});

   

 $("#pickup").change(function(){

  $.ajax({

    url: 'http://localhost:8080/rent/city/'+$(this).val(),
     
    data:null,
    contentType:'application/json',
    crossDomain: true,
    dataType: 'jsonp',
    
    jsonpCallback:'getCity',
    contentType:'application/json',
    success: getCity,
    type:'GET'
   




        
     }); 


 
 function getCity(data)
{    console.log(data);
    
    
     
    
      
}

   }); 


$("#deliver").change(function(){

  $.ajax({

    url: 'http://localhost:8080/rent/decity/'+$(this).val(),
     
    data:null,
    contentType:'application/json',
    crossDomain: true,
    dataType: 'jsonp',
    
    jsonpCallback:'getCity',
    contentType:'application/json',
    success: getCity,
    type:'GET'
   




        
     }); 


 
 function getDeCity(data)
{    console.log(data);
    
    
     
    
      
}

   }); 






















});
