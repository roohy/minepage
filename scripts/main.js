var social = '<div class="ui basic segment center aligned"> <a href="https://github.com/roohy" class="ui circular github icon button"> <i class="github icon"></i> </a> <a href="https://twitter.com/RoohyS" class="ui circular twitter icon button"> <i class="twitter icon"></i> </a> <a href="https://www.linkedin.com/in/roohy/" class="ui circular linkedin icon button"> <i class="linkedin icon"></i> </a> <a href="https://plus.google.com/+RoohyShemirani" class="ui circular google plus icon button"> <i class="google plus icon"></i> </a> <a href="https://www.instagram.com/roooooooohy/" class="ui circular instagram icon button"> <i class="instagram icon"></i> </a> <a href="https://www.facebook.com/Rooohy" class="ui circular facebook icon button"> <i class="facebook icon"></i> </a> </div>';

var showing = '';
var pre_show = '';


function change_page( second_id){
    $(showing).transition('scale',1200,function (){
        $(second_id).transition('scale',1200);
    });
    pre_show = showing;
    showing = second_id;
}
function change_back(){
    change_page(pre_show);
}
$(document).ready(function(){

    console.log("ready");
    $('#main-container').transition('fade',1500);
    $('#button-gird .button').transition({
        animation : 'scale',
        duration  : 1500,
        interval  : 500,
        reverse   : 'auto'
    });
    showing = "#main-container";
    $('.ui.rating')
        .rating()
    ;

    $("#abt_me").click(function (e) {
        change_page("#about_me_container");
    });

    $(".go-academic").click(function (e) {
       change_page("#academic_container");
    });
    $(".go-home").click(function (e) {
        change_page("#main-container");
    });

    $(".go-back").click(function (e) {
        change_back();
    });

    $(".go-skills").click(function (e) {
       change_page("#skills_container");
    });

    $(".go-projects").click(function(e){
       change_page("#projects_container");
    });

    //Progress
    $(".progress").progress();

});
