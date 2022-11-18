var FullImgBox = document.getElementById("FullImgBox");
var FullImg = document.getElementById("FullImg");

function openFullImg(pic){
FullImgBox.style.display = "flex";
FullImg.src = pic;
}
function closeFullImg(){
FullImgBox.style.display = "none";
}
