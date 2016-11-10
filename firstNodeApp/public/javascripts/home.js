$(document).ready(function(){
	$('#post_button').click(function(e){
		e.preventDefault();
		var text = $("#submit_field").val();
		if(text){
			localStorage.setItem('Text',text);
		}
		$.post("http://localhost:3000/posted",{text: text}, function(data){
            if(data==='done')
              {
                alert("Data posted to server!");
              }
         });
	});
});