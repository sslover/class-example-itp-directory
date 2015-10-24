// CUSTOM JS FILE //

function init() {
  renderPeeps();
}

function renderPeeps(){
	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			console.log(response);

			var people = response.people;

			for(var i=0;i<people.length;i++){
				var htmlToAdd = '<div class="col-md-4">'+
					'<img src='+people[i].imageUrl+' width="50">'+
					'<h1>'+people[i].name+'</h1>'+
				'</div>';
			
				jQuery("#people-holder").append(htmlToAdd);
			}



		}
	})	
}


window.addEventListener('load', init())