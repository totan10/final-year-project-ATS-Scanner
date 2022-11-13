//toggle button
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar-container,.job-description,.toggle,.card,");
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

//upload file
const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
const uploadfile=document.querySelector(".upload-btn");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    </form>`;
  dropArea.innerHTML = filedata;
  if(fileName==null){
    uploadfile.classList.toggle("active");
  }else{
    uploadfile.classList.toggle("");
  }
});

// progress bar
var i = 0;
function move(){
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

//Result circle 
let number=document.getElementById("number");
let counter = 0;
let csstyle= document.createElement('style');
csstyle.type='text/css';
document.head.appendChild(csstyle);
let x = Math.floor((Math.random() * 100) + 1);
setInterval(()=>{
    if(counter==x){
        clearInterval();
    }else{
        counter+=1;
        number.innerHTML=counter+"%";
    }
},30);
let val=440-(440*x/100);
const css = window.document.styleSheets[0];
css.insertRule(`
@keyframes anim{
    100% {stroke-dashoffset: ${val}}
}`, css.cssRules.length);