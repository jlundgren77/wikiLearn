

// "http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json"

$(document).ready(function() {
    

    $("#random").on('click', function(event){
        $.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: { action: 'query', 
                    generator: "random", 
                    gsrwhat: 'text', 
                    grnnamespace: "0", 
                    prop: 'extracts|info', 
                    explaintext: "", 
                    inprop: 'url',
                    exsentences: 3,
                    exlimit: 20, 
                    format: 'json' },
            dataType: 'jsonp',
            success: function (data) {
                var data = data.query.pages
                // var id = Object.keys(data.query.pages)[0];
                // var title = data.query.pages[id].title;
                // var extract = data.query.pages[id].extract;
                
                // $("#title").html(title);
                // $("#article").html(extract);
                $('#articles_list').append(displayRandomArticle(data));
                $("#ex2").modal();
            },
        
    	   error: function (errorMessage) {
                
            }
        });
    });

    $("#search_input").keypress(function(e) {
        if(e.which==13) {
            var searchTerms = $("#search_terms").val();
            $.ajax({
                url: '//en.wikipedia.org/w/api.php',
                data: {action: 'query', 
                       format: 'json', 
                       inprop: 'url', 
                       generator: 'search',
                       gsrsearch: searchTerms,
                       gsrwhat: 'text',
                       prop: 'pageimages|extracts|info',
                       exintro: "",
                       explaintext: "",
                       exsentences: 3,
                       exlimit: 20,
                       piprop: "thumbnail",
                       pithumbsize: 50,
                       pilimit: 20,
                       redirects: "",

                   },
                dataType: 'jsonp',
                success: function(data) {

                    
                    var data = data.query.pages;
                    $.each(data, function(key, value) {
                       $('#articles_list').append(displaySearchResults(value))


                    })

                },
                 error: function (errorMessage) {
                
            }   

            });
        }
    });

    $("#restart").on("click", function() {
        $("#restart").hide();
        $("#searches").show();
        $("#articles_list").html("");
        $("#search_terms").val("");
    });

    function displayRandomArticle(data) {
        
        var id = Object.keys(data)[0];
        var title = data[id].title;
        var extract = data[id].extract;
        var url = data[id].fullurl;
        
        console.log(data[id]);
        var articleDiv = $("#article_template .random_article_container").clone();
        var articleTitle = articleDiv.find('.article-title');
        articleTitle.text(title);

        var articleLink = articleDiv.find('.article-link');
        articleLink.attr('href', url);

        var articleExtract = articleDiv.find('.article');

        articleExtract.text(extract);

            
        return articleDiv;
       
    }

    function displaySearchResults(data) {
         
                    
            
            var title = data.title;
            var extract = data.extract;
            // var thumbnail = data.thumbnail.source;
            var url = data.fullurl;

            var articleDiv = $("#article_template .article_container").clone();
            var articleTitle = articleDiv.find('.article-title');
            articleTitle.text(title);
            // articleTitle.attr("href", url).text(title);

           
            var articleLink = articleDiv.find('.article-link');

            articleLink.attr('href', url);
            // if (thumbnail == "") {
            //     articlePic.attr('src', "");
            //     articlePic.attr('alt', "no image found");
            // }
            // else {
            //     articlePic.attr('src', thumbnail);
            // }

            var articleExtract = articleDiv.find('.article');

            articleExtract.text(extract);

            $("#restart").show();
            $("#searches").hide();
            return articleDiv;
                        
                   

    };

  //   //Modal function

      
  //   $(function() {
  // $("#modal-1").on("change", function() {
  //   if ($(this).is(":checked")) {
  //     $("body").addClass("modal-open");
  //   } else {
  //     $("body").removeClass("modal-open");
  //   }
  // });

  // $(".modal-fade-screen, .modal-close").on("click", function() {
  //   $(".modal-state:checked").prop("checked", false).change();
  // });

  // $(".modal-inner").on("click", function(e) {
  //   e.stopPropagation();
  // });
//});



});



    // "http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json"


// error: function (errorMessage) {
                
//             }