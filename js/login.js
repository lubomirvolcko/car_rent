$(document).ready(function() {



 $("#button").click(function(){
var username = $("#usr").val();
var password = $("#pwd").val();

$.ajax({
        url : "http://localhost:8080/auth/login",

        type: "POST",
        data: JSON.stringify({"username": username,"password": password}),
        contentType: "application/json; charset=utf-8",
        dataType   : 'json',
        statusCode: {
      401: function () {
         alert('Wrong username or password!');

         
      },
      200: function () {
         afterlogin()
         
         
      },
}
   
 });

 $.ajax({

    url: 'http://localhost:8080/rent/all',
     
    data:null,
    contentType:'application/json',
    crossDomain: true,
    dataType: 'jsonp',
    
     jsonpCallback:'getTable',
    contentType:'application/json',
    
   type:'GET'
   



        
     });   
 

      
   function afterlogin()
   {

   	$("#form").hide();
   }

   

  

});


	 




});

 $.ajax({

    url: 'http://localhost:8080/rent/all',
     
    data:null,
    contentType:'application/json',
    crossDomain: true,
    dataType: 'jsonp',
    
     jsonpCallback:'getTable',
    contentType:'application/json',
    
   type:'GET'
   



        
     });  

     function getTable(data) 
   {

   	
   	
   	var x=data;

   	
   	
   	for(var i in x)

   	$("#apo").html(x[i]);
   }






