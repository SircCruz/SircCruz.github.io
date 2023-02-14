var desktop = window.matchMedia("(min-width: 1025px)");
var currentScroll = 0;
var scrollFunction = function(){
    currentScroll = window.scrollY;
    var scroll = document.getElementById("bg1").offsetHeight / 2;
    if(currentScroll > scroll){
        document.getElementById("navigation").className = "navigation fadein";
        document.getElementById("navigation").style.display = "block";
        if(!desktop.matches){
            isNaviShowing = false;
        }
        else{
            document.body.style.overflowY = "scroll";
        }
    }
    else{
        document.getElementById("navigation").className = "navigation fadeout";
    }
}
function Readmore(content){
    var dots;
    var button;
    var content;
    if(content == "aboutme"){
        dots = document.getElementById("aboutme_dots");
        button = document.getElementById("aboutme_btnreadmore");
        content = document.getElementById("aboutme_readmore");
    }
    else if(content == "cryofgaia"){
        dots = document.getElementById("cry_dots");
        button = document.getElementById("cry_btnreadmore");
        content = document.getElementById("cry_readmore");
    }
    else if(content == "sirccruz"){
        dots = document.getElementById("sirc_dots");
        button = document.getElementById("sirc_btnreadmore");
        content = document.getElementById("sirc_readmore");
    }
    else if(content == "socialmedia"){
        dots = document.getElementById("social_dots");
        button = document.getElementById("social_btnreadmore");
        content = document.getElementById("social_readmore");
    }
    dots.style.display = "none";
    content.style.display = "inline";
    button.style.display = "none";
}
var isDarkmode = false;
function SetViewMode(){
    document.body.style.overflowY = "scroll";
    if(!isDarkmode){
        document.getElementById("body").className = "darkmode";
        document.getElementById("sun").style.display = "block";
        document.getElementById("moon").style.display = "none";
        var card = document.getElementsByClassName("card-viewmode");
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove("lightmode2");
            card[i].className += " darkmode2";
        }
        for (let i = 1; i <= 10; i++) {
            document.getElementById("line" + i).style.fill = "#ffffff";
        }
        var text = document.getElementsByClassName("text-viewmode");
        for(let i = 0; i < text.length; i++){
            text[i].classList.remove("darkmodep");
            text[i].className += " lightmodep";
        }
        isDarkmode = true;
    }
    else{
        document.getElementById("body").className = "lightmode";
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "block";
        var card = document.getElementsByClassName("card-viewmode");
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove("darkmode2");
            card[i].className += " lightmode2";
        }
        for (let i = 1; i <= 10; i++) {
            document.getElementById("line" + i).style.fill = "#000000";
        }
        var text = document.getElementsByClassName("text-viewmode");
        for(let i = 0; i < text.length; i++){
            text[i].classList.remove("lightmodep");
            text[i].className += " darkmodep";
        }
        isDarkmode = false;
    }
}

window.addEventListener("scroll", scrollFunction);

function scrollToDiv(name){
    var yOffSet = 70;
    var y = document.getElementById(name).getBoundingClientRect().top + window.scrollY - yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
}

var isNaviShowing = false;
function naviShowState(){
    if(!isNaviShowing){
        showNavi();
        isNaviShowing = true;
    }
    else{
        hideNavi();
        isNaviShowing = false;
    }
}
function showNavi(){
    document.getElementById("navigation").className = "navigation show";
    document.getElementById("portfolio").style.animation = "blurbg 0.5s forwards";
    document.getElementById("portfolio").className = "portfolio blur";
    document.getElementById("introduction").style.animation = "blurbg 0.5s forwards";
    document.getElementById("introduction").className = "introduction blur";
    document.body.style.overflowY = "hidden";

    document.getElementById("svg-navi-open").className = "svg-navi-open shrink";
    document.getElementById("svg-navi-close").className = "svg-navi-close enlarge";
}
function hideNavi(){
    document.getElementById("portfolio").style.animation = "unblurbg 0.5s forwards";
    document.getElementById("portfolio").className = "portfolio unblur";
    document.getElementById("navigation").className = "navigation hide";
    document.getElementById("introduction").style.animation = "unblurbg 0.5s forwards";
    document.getElementById("introduction").className = "introduction unblur";
    document.body.style.overflowY = "scroll";

    document.getElementById("svg-navi-open").className = "svg-navi-open enlarge";
    document.getElementById("svg-navi-close").className = "svg-navi-close shrink";
}
function _hideNavi(){
    document.getElementById("navigation").className = "navigation hide";
    document.getElementById("svg-navi-open").className = "svg-navi-open enlarge";
    document.getElementById("svg-navi-close").className = "svg-navi-close shrink";
}
function unblur(){
    document.getElementById("portfolio").style.animation = "none";
    document.getElementById("portfolio").className = "portfolio unblur";
    document.getElementById("introduction").style.animation = "none";
    document.getElementById("introduction").className = "introduction unblur";
}
var image = 1;
var temp = 1;
var _imgCount = 0;
function nextPage(){
    if(image <= _imgCount){
        document.getElementById("imgNum" + temp).className = "inactive";
        document.getElementById("imgNum" + image).className = "active";
        document.getElementById("pagenum").innerText = image + "/" + _imgCount;
        temp = image;
        image++;
    }
}
function prevPage(){
    image -= 2;
    if(image >= 1){
        nextPage();
    }
    else{
        image = 2;
    }
}

function exit_Fullscreen(){
    temp = 1;
    image = 1;
    removeImages();
    document.getElementById("fullscreen").style.display = "none";
}
function enter_Fullscreen(title, imgCount){
    _imgCount = imgCount;
    document.getElementById("fullscreen").style.display = "block";
    getImages(title, _imgCount);
}
function getImages(title, imgCount){
    for(let i = 1; i <= imgCount; i++){
        document.getElementById("img-container").innerHTML += 
        "<img src='images/" + title + "/"+ i + ".JPG' class='inactive' id='imgNum" + i + "'>";
        image = 1;
    }
    nextPage();
}
function removeImages(){
    for(let i = 1; i <= _imgCount; i++){
        var element = document.getElementById("imgNum" + i);
        element.remove();
    }
}

var image1 = 0;
var temp1 = 0;
var timeout1;
var isImgEnlarged = false;
function imageSet1(){
    try{
        document.getElementById("set1img" + temp1).className = "inactive btn-page";
        document.getElementById("set1img" + image1).className = "active btn-page";
        document.getElementById("set1btn" + temp1).className = "inactive btn-page";
        document.getElementById("set1btn" + image1).className = "active btn-page";
        document.getElementById("set1pagenumber").innerText = image1 + 1 + "/7";
        temp1 = image1;
        image1++;
        timeout1 = setTimeout(imageSet1, 5000);
    }
    catch{
        image1 = 0;
        setTimeout(imageSet1, 0);
    }
}
function setImg1(img){
    clearTimeout(timeout1);
    image1 = img;
    imageSet1();
}
function nextImg1(){
    if (image1 < 7){
        clearTimeout(timeout1);
        imageSet1();
    }
}
function prevImg1(){
    if(image1 > 1){
        clearTimeout(timeout1);
        image1 -= 2;
        imageSet1();
    }
}
imageSet1();
var image2 = 0;
var temp2 = 0;
var timeout2;
function imageSet2(){
    try{
        document.getElementById("set2img" + temp2).className = "inactive btn-page";
        document.getElementById("set2img" + image2).className = "active btn-page";
        document.getElementById("set2btn" + temp2).className = "inactive btn-page";
        document.getElementById("set2btn" + image2).className = "active btn-page";
        document.getElementById("set2pagenumber").innerText = image2 + 1 + "/5";
        temp2 = image2;
        image2++;
        timeout2 = setTimeout(imageSet2, 5000);
    }
    catch{
        image2 = 0;
        setTimeout(imageSet2, 0);
    }
}
function setImg2(img){
    clearTimeout(timeout2);
    image2 = img;
    imageSet2();
}
function nextImg2(){
    if (image2 < 5){
        clearTimeout(timeout2);
        imageSet2();
    }
}
function prevImg2(){
    if(image2 > 1){
        clearTimeout(timeout2);
        image2 -= 2;
        imageSet2();
    }
}
imageSet2()
var image3 = 0;
var temp3 = 0;
var timeout3;
function imageSet3(){
    try{
        document.getElementById("set3img" + temp3).className = "inactive btn-page";
        document.getElementById("set3img" + image3).className = "active btn-page";
        document.getElementById("set3btn" + temp3).className = "inactive btn-page";
        document.getElementById("set3btn" + image3).className = "active btn-page";
        document.getElementById("set3pagenumber").innerText = image3 + 1 + "/5";
        temp3 = image3;
        image3++;
        timeout3 = setTimeout(imageSet3, 5000);
    }
    catch{
        image3 = 0;
        setTimeout(imageSet3, 0);
    }
}
imageSet3();
function setImg3(img){
    clearTimeout(timeout3);
    image3 = img;
    imageSet3();
}
function nextImg3(){
    if (image3 < 5){
        clearTimeout(timeout3);
        imageSet3();
    }
}
function prevImg3(){
    if(image3 > 1){
        clearTimeout(timeout3);
        image3 -= 2;
        imageSet3();
    }
}
var image4 = 0;
var temp4 = 0;
var timeout4;
function setImg4(img){
    clearTimeout(timeout4);
    image4 = img;
    imageSet4();
}
function nextImg4(){
    if (image4 < 5){
        clearTimeout(timeout4);
        imageSet4();
    }
}
function prevImg4(){
    if(image4 > 1){
        clearTimeout(timeout4);
        image4 -= 2;
        imageSet4();
    }
}
function imageSet4(){
    try{
        document.getElementById("set4img" + temp4).className = "inactive btn-page";
        document.getElementById("set4img" + image4).className = "active btn-page";
        document.getElementById("set4btn" + temp4).className = "inactive btn-page";
        document.getElementById("set4btn" + image4).className = "active btn-page";
        document.getElementById("set4pagenumber").innerText = image4 + 1 + "/5";
        temp4 = image4;
        image4++;
        timeout4 = setTimeout(imageSet4, 5000);
    }
    catch{
        image4 = 0;
        setTimeout(imageSet4, 0);
    }
}
imageSet4();

var image5 = 0;
var temp5 = 0;
var timeout5;
function setImg5(img){
    clearTimeout(timeout5);
    image5 = img;
    imageSet5();
}
function nextImg5(){
    if (image5 < 5){
        clearTimeout(timeout5);
        imageSet5();
    }
}
function prevImg5(){
    if(image5 > 1){
        clearTimeout(timeout5);
        image5 -= 2;
        imageSet5();
    }
}
function imageSet5(){
    try{
        document.getElementById("set5img" + temp5).className = "inactive btn-page";
        document.getElementById("set5img" + image5).className = "active btn-page";
        document.getElementById("set5btn" + temp5).className = "inactive btn-page";
        document.getElementById("set5btn" + image5).className = "active btn-page";
        document.getElementById("set5pagenumber").innerText = image5 + 1 + "/5";
        temp5 = image5;
        image5++;
        timeout5 = setTimeout(imageSet5, 5000);
    }
    catch{
        image5 = 0;
        setTimeout(imageSet5, 0);
    }
}
imageSet5();

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert("Thanks for your submission!");
          form.reset()
        } else {
              alert("Oops! There was a problem submitting your form");
        }
      }).catch(error => {
        alert("Oops! There was a problem submitting your form");
      });
    }
    form.addEventListener("submit", handleSubmit)
    

    