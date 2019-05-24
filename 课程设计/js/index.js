$(function(){
    $("#part2").hide();
    alert("网站将有音频自动播放，若您未设置谷歌浏览器的Autoplay policy为No user gesture is required，将无法正常播放，" +
        "请手动播放或者更改设置。\n网站页面的音频均为网易云音乐链接，请确保网络正常，否则将无法正常播放")
    $(".down").click(function () {
        $("#part1").slideToggle("slow",function () {
            $("#part2").slideToggle("slow");
        });
    })
    $(".up").click(function () {
        $("#part2").slideToggle("slow",function () {
            $("#part1").slideToggle("slow");
        });
    })

})
function toggleSound() {
    var music = document.getElementById("music");//获取ID  
    console.log(music);
    console.log(music.paused);
    if (music.paused) { //判读是否播放  
        music.paused=false;
        music.play(); //没有就播放 
    }

}