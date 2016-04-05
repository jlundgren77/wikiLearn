$(document).ready(function() {
    

    $("#random").on('click', function(){
    	$.ajax({
	        type: "GET",
	        // url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
	        // url: "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=text&list=randomn&rnlimit=5",
	        url: "http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json&callback=?",

	        contentType: "application/json; charset=utf-8",
	        async: false,
	        dataType: "json",
	        success: function (data, textStatus, jqXHR) {
	            
	            console.log(data.query.pages);

	            var text = data.query.pages[Object.keys(data.query.pages)[0]].extract;
	            $(".content").html(text);
	            
	        },
	        error: function (errorMessage) {
	        	
	        }
    	});

    });
	

});



    // "http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json"
