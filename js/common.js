function myAlert() {
    alert("              这你都能瞅见，缘分啊                     <(＾－＾)>")
    //渐变背景
    var article = document.getElementsByTagName("article")[0];
    if(article.style.boxShadow==""){
        setInterval(function () {
            article.style.boxShadow = "0 0 500px inset rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + ")";
        }, 400);
    }

    //背景音乐
    if(document.getElementById("bgAudio")==null){
        var body=document.getElementsByTagName("body")[0];
        var audio=document.createElement("audio");
        audio.id="bgAudio";
        body.appendChild(audio);
        audio.src="http://music.163.com/song/media/outer/url?id=33527135.mp3";
        audio.autoplay="autoplay";
        audio.loop="loop";
    }

    //添加编辑
    var date=document.getElementById("time");
    var currentHref=window.location.href;
    var targetHref=currentHref.replace("https://loubth.github.io/collection/","https://github.com/loubth/collection/edit/master/");
    date.onclick= function () {
        window.location.href=targetHref;
    }
    date.style.cursor="pointer";

}



