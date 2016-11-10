$(document).ready(function(){
	var message = localStorage.getItem('Message');
	localStorage.clear();
	if(message != null){
		$('p').html('You have typed ' + message + ' !');
	}
});