console.log("Your index.js file is loaded correctly");

(function(){
    var words= [
        'Creative Thinker',
        'Problem Solver',
        'Travel Enthusiast',
        'UX Designer'
    ], i=0;
    setInterval(function(){
        $('#changingWord').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    },3000);
})();


$(".nav").mouseover(function(){
    $(this).css("color","white");
});
$(".nav").mouseout(function(){
    $(this).css("color","black");
});