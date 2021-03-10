/*
 * events.js 
*/
/*************************MemberBenefits buttonClick*************************/
//varibale holding button info
var button = document.getElementById('Btn');

//function that will make mailingList visible 
 function openForm(){
     document.getElementById("mailingList").style.display = "block";
/*and will remove the eventlistener, to only allow the button to be clicked once.*/
button.removeEventListener("click",openForm);
   }
/*if statement is used to check if button variable is null*/
if(button){
	/*adds event listener with a click event*/
button.addEventListener("click",openForm, false);
}
  
/*************************MemberBenefits radioClick*************************/
/*variable button will hold radio button info if not null*/
  var newsbutton = document.getElementById("radio");
/*funciton that will make thankyou section visible*/
   function thankyou() {
       document.getElementById("thankYou").style.display = "block";	   
/*and will remove eventlistener after button is clicked*/
     newsbutton.removeEventListener("click", thankyou);
   }
/* check if variable is not null*/
if(newsbutton){
	
	/*adds event listener with a click event*/
   newsbutton.addEventListener("click", thankyou, false);
}
	

/*************************Get Directions buttonClick*************************/
/*variable button will hold radio button info if not null*/
	var getDirectionsBtn = document.getElementById("gtDrctnBtn");

/*funciton that will make directions section visible*/
  function directions() {
	document.getElementById("directions").style.display = 'block';
	
/*variable button will hold drivingTo info if not null*/
var getDirections = document.getElementById('drivingTo');	  
/*variable will replace innerHtml info with this address string*/
getDirections.innerHTML='<h3>Get on I-275 N from N Florida Ave<br/ >3 min (1.0 mi)<br/ ><br/ >Follow I-4 E to Orlando. Exit from I-4 E<br/ >1 h 16 min (83.9 mi)<br/ ><br/ >Take W Colonial Dr and N Magnolia Ave to your destination<br/ >3 min (0.6 mi)</h3>';
  }
/* check if variable is not null*/
if(getDirectionsBtn){
	
	/*adds event listener with a click event*/
  getDirectionsBtn.addEventListener("click", directions, false);
}







