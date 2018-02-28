 $(document).ready(function() {
 var ba=$("#ba").val();

 //TIME AND DATE
var today= new Date();
var time = today.getHours() + ":" + today.getMinutes()  
var day = ("0" + today.getDate()).slice(-2);
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var today = today.getFullYear()+"-"+(month)+"-"+(day) ;
var today2 = new Date();
var day2 = ("0" + today2.getDate()).slice(-2);
var month2 = ("0" + (today2.getMonth() + 1)).slice(-2);
var today2=today2.getFullYear()+1+"-"+(month2)+"-"+(day2) ;

$("#inputDate").attr("min",today);
$("#inputDate").attr("value",today);
$("#inputDelDate").attr("value",today);
$("#inputDelDate").attr("min",today);
$("#inputDelDate").attr("max",today2);

//SHOW MAP 
    
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
    
// GET CARS FROM DATABASE BY CATEGORY

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

//GET VALUES FROM INPUTS AND SEND IT TO DATABASE





 
  


   $("#button").click(function(){ 
  var cat =$("#cat").val();
  var choosenCar = $("#dbcar").val();
  var pickplace=$("#pickup").val();
  var deliverplace=$("#deliver").val();
  var firstname = $("#fname").val();
  var lastname = $("#lname").val();
  var email = $("#email").val();
  var number = $("#number").val();
  var idcardnumber = $("#idcardnumber").val();
  var pickdate =$("#inputDate").val();
  var picktime = $("#inputTime").val();
  var deliverdate = $("#inputDelDate").val();
  var delivertime = $("#inputDelTime").val();
  var notes = $("#notes").val();
  
   
 //REGEX
var firstnameregex = /^[A-ZÁ-Ž]{1,1}[a-zá-ž]{1,15}$/;
var lastnameregex= /^[A-ZÁ-Ž]{1,1}[a-zá-ž]{1,15}$/;
var emailregex=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var numberregex = /^[+][4][2][1][9][0-9]{8}$/;
var idcardregex = /^[E][A-Z][0-9]{6}$/;

if(delivertime==""||picktime==""||deliverplace==null||pickplace==null||cat==null||firstname.match(firstnameregex)==null||lastname.match(lastnameregex)==null||number.match(numberregex)==null||idcardnumber.match(idcardregex)==null||email.match(emailregex)==null){
alert("Ooopss. Something wrong. Please check your inserted values");
}


else{

ajax();}


  


function ajax(){
$.ajax({
        url : "http://localhost:8080/information/new",

        type: "POST",
        data: JSON.stringify({"choosenCar": choosenCar,"pickplace": pickplace,
        "deliverplace":deliverplace,"firstname":firstname,"lastname":lastname,
        "email":email,"number":number,"idcardnumber":idcardnumber,"pickdate":pickdate,"picktime":picktime,
        "deliverdate":deliverdate,"delivertime":delivertime,"notes":notes}),
        contentType: "application/json; charset=utf-8",
        dataType   : 'json',

   
        success : console.log("Success write")
    });
}


});


  $('#menuButton').click(function(){
  $('#smallMenu').toggle();

    });


}); /* function ready */
 

    
  
 