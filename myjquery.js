$(document).ready(function(){

 // $("button").click(function(){
    //$(this).hide();
    $("#btnhide").click(function(){
  
          $("p").hide();

    });

    $("#btnshow").click(function(){
  
        $("p").show();
        $("p").css('background-color','blue');
        $("p").css('color','white');
        $("p").css('padding','100');
        $("p").html("Hello");
        

    });
   /* $("#btnshowhide").click(function(){

        //$("p").hide();
       // $("#btnshowhide").html("show");
        //var status = $("#btnshowhide").html;
        if($('#btnshowhide:contains("Hide")'))
        {
            $("p").hide();
            $("#btnshowhide").html("Show");
        }
        else if($('#btnshowhide:contains("Show")')) {
            $("p").show();
            $("#btnshowhide").html("Hide");
        }

    }); */
    $('#btnshowhide:contains("Hide")').click(function(){

        //$("p").css('display','none');
        $("div").fadeOut();
        $("div").fadeOut("slow");
        $("div").fadeOut(2000);
       // $("p").hide();
        $("#btnshowhide").html("Show");
    });
    $('#btnshowhide:contains("Show")').click(function(){
        //$("p").css('display','block');
        $("div").fadeIn();
        $("div").fadeIn("slow");
        $("div").fadeIn(2000);
       // $("p").show();
        
        $("#btnshowhide").html("Hide");
    });
    $("img.cat").mouseenter(function(){
      
        $("img.cat").attr("src",'cat1.jpg');
        $("img.cat").css('border','solid 1px');
    });
    $("img.cat").mouseleave(function(){
       
        $("img.cat").attr("src",'cat2.jpg');
        $("img.cat").css('border','none');
    });

});
