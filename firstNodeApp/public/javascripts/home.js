$(document).ready(function(){
	var text = $("#text_field").val();
	if(text != ''){
		localStorage.setItem('Message', text);
	} 
});