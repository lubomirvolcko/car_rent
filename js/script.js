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



var nulll =" ";

$("#inputDate").attr("min",today);

$("#inputDelDate").attr("min",today);

$("#inputDate").change(function(){

var date = $("#inputDate").val();
console.log(date);
$("#inputDelDate").val(nulll);

$("#inputDelDate").attr("min",date);

});



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

$("#cat").hide();
$("#dbcar").hide();
$("#pickup").hide();
$("#deliver").hide();
$("#fname").hide();
$("#lname").hide();
$("#email").hide();
$("#number").hide();
$("#idcardnumber").hide();
$("#inputDate").hide();
$("#inputTime").hide();
$("#inputDelDate").hide();
$("#inputDelTime").hide();
$("#notes").hide();
$("#button").hide();
$("#headOrderForm").hide()

$("#checkvalues").css("display", "block");

$("#confirmcat").text(cat);
$("#confirmcar").text(choosenCar);
$("#confirmpickdate").text(pickdate);
$("#confirmdeldate").text(deliverdate);
$("#confirmpickplace").text(pickplace);
$("#confirmdelplace").text(deliverplace);
$("#confirmfname").text(firstname);
$("#confirmlname").text(lastname);
$("#confirmmail").text(email);
$("#confirmnumber").text(number);
$("#confirmidnumber").text(idcardnumber);
$("#confirmnotes").text(notes);
$("#picktime").css("display", "inline");
$("#confirmpicktime").html(picktime);
$("#delltime").css("display", "inline");
$("#confirmdeltime").html(delivertime);
$("#send").css("display", "inline");
$("#repair").css("display", "inline");


 $("#confirmcat").show();
$("#confirmcar").show();
$("#confirmpickplace").show();
$("#confirmdelplace").show();
$("#confirmfname").show();
$("#confirmlname").show();
$("#confirmmail").show();
$("#confirmnumber").show();
$("#confirmpickdate").show();
$("#confirmdeldate").show();
$("#confirmidnumber").show();
$("#confirmpicktime").show();
$("#confirmdeltime").show();
$("#confirmnotes").show();
$("#delltime").show();
$("#picktime").show();



}


});


$("#send").click(function(){ 
  
  var choosenCar =  $("#confirmcar").text();
  var pickplace=$("#confirmpickplace").text();
  var deliverplace=$("#confirmdelplace").text();
  var firstname = $("#confirmfname").text();
  var lastname = $("#confirmlname").text();
  var email = $("#confirmmail").text();
  var number = $("#confirmnumber").text();
  var idcardnumber = $("#confirmidnumber").text();
  var pickdate =$("#inputDate").val();
  var picktime = $("#inputTime").val();
  var deliverdate = $("#inputDelDate").val();
  var delivertime = $("#inputDelTime").val();
  var notes = $("#confirmnotes").text();

 
 var tajm=$("#inputDate").val();
 var tajm2=$("#inputDelDate").val();

if(tajm==tajm2)
{
alert("Sorry you cannot insert same Pick-up and Delivery date!");

}
else
{

  $.ajax({
        url : "http://localhost:8080/information/new",

        type: "POST",
        data: JSON.stringify({"choosenCar": choosenCar,"pickplace": pickplace,
        "deliverplace":deliverplace,"firstname":firstname,"lastname":lastname,
        "email":email,"number":number,"idcardnumber":idcardnumber,"pickdate":pickdate,"picktime":picktime,
        "deliverdate":deliverdate,"delivertime":delivertime,"notes":notes}),
        contentType: "application/json; charset=utf-8",
        dataType   : 'json',

   
        success : send()
    });



}








});

$("#repair").click(function(){ 

$("#headOrderForm").hide()
$("#confirmcat").hide();
$("#confirmcar").hide();
$("#confirmpickplace").hide();
$("#confirmdelplace").hide();
$("#confirmfname").hide();
$("#confirmlname").hide();
$("#confirmmail").hide();
$("#confirmnumber").hide();
$("#confirmpickdate").hide();
$("#confirmdeldate").hide();
$("#confirmidnumber").hide();
$("#confirmpicktime").hide();
$("#confirmdeltime").hide();
$("#confirmnotes").hide();
$("#delltime").hide();
$("#picktime").hide();

$("#cat").show();
$("#cat").show();
$("#dbcar").show();
$("#pickup").show();
$("#deliver").show();
$("#fname").show();
$("#lname").show();
$("#email").show();
$("#number").show();
$("#idcardnumber").show();
$("#inputDate").show();
$("#inputTime").show();
$("#inputDelDate").show();
$("#inputDelTime").show();
$("#notes").show();
$("#button").show();
$("#send").hide();


});


  $('#menuButton').click(function(){
  $('#smallMenu').toggle();

    });


}); /* function ready */
 

function send()
{

  $("#form").hide();
  $("#thank").css("display", "block");
  $("#checkvalues").css("display", "none");
}    