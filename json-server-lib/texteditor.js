"use strict";
  $(document).ready(function(){
    $('.content').richText();
    var count=[0,0,0];
    var a;
    //get data       
        $.ajax({
            // type: 'GET',
            type: 'GET',
            dataType: 'json',
         
            url: 'http://localhost:3333/blogdata',
            success: function(result){
            //  console.log(result[0]);
                 a=result;
                console.log('response from server')
                $.each(result, function(i, record){                   
                  console.log(record);
                  document.getElementById("show").innerHTML += record.content;                
                })                
            }
        })
        $("#cate").click(function(){




          for(var i = 0; i < a.length; i++) {
            var obj = a[i];
            var likejava;           
            if(obj.category=="j"){
                  console.log(obj);
                }             
        }

        })
        //post the blog
        $("#post").click(function(){              
          $.ajax({           
            type: 'POST',
            dataType: 'json',          
            url: 'http://localhost:3333/blogdata',
            data: {
             "content":$(".content").val(),
             "category":$('#category :selected').val(),
             "title":$("#title").val(),
            } ,             
            dataType:'json',
            success: function(result){              
                console.log('result');
            }                     
          })
        })
        
    
})
