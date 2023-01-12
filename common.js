function getLoc(){
    var url = location.href;
    var arrUrl = url.split("/");
    var ret = "";
    for (var i = 3;i < arrUrl.length;i ++)
        ret += "/" + arrUrl[i];
    return ret;
}
function queryLockURL(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            var lockstr = ajax.responseText;
            var loc = getLoc();
            if (lockstr != "" && getLoc() != lockstr)
                location.href = lockstr;
        }
    }
    ajax.open("GET","/control/lock_conf?t=" + Math.random() + "" + Math.random());
    ajax.send();
}
queryLockURL();
function getObj(id){
    return document.getElementById(id);
}
function getParam(key){
    var spl1 = location.href.split("?");
    if (spl1.length < 2)
        return "";
    var spl2 = spl1[1].split("&");
    if (spl2.length == 0)
        return "";
    for (var i = 0;i < spl2.length;i ++){
        var spl3 = spl2[i].split("=");
        if (spl3.length < 2)return "";
        if (spl3[0] == key)
            return spl3[1];
    }
    return "";
}
function Play(url){
    var voice = new Audio(url);
    voice.play();
}
function setChar(str,idx,ch){
    return str.slice(0,idx) + ch + str.slice(idx + 1,str.length);
}
function setCookie(key,value,sec,path){
    document.cookie = key + '=' + value + ";" + "max-age=" + (sec * 24 * 60 * 60) + ";path=" + path;
    console.log(document.cookie);
}
function getCookie(key){
    var cook = document.cookie;
    var spl1 = cook.split(";");
    for (var i = 0;i < spl1.length;i ++){
        var spl2 = spl1[i].split("=");
        if (spl2.length < 2)return "";
        if (spl2[0] == key || spl2[0] == ' ' + key)
            return spl2[1];
    }
    return "";
}
function Sleep(ms){
    var stdt = new Date();
    var sttm = stdt.getTime();
   	while (1){
        var eddt = new Date();
        var edtm = eddt.getTime();
        if (edtm - sttm >= ms)break;
    }
}