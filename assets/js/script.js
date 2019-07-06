

let h1 = document.querySelector('h1');
h1.textContent = "Abhishek maurya"

document.querySelector('h1').textContent = "hello world";

console.log(document.getElementById('heading').innerText);
document.getElementById('heading').innerHTML = "hello abhishek maurya";
document.getElementsByClassName('heading')[0].style.fontSize = '50px';
console.log(document.getElementById('heading').innerText);
let btn = document.getElementById('hide');
btn.addEventListener('click', hide);
var n =btn.value;
function hide(){

    if(n == 1){
        document.getElementById('heading').style.display = 'none';
        btn.textContent = "Show";
        n=0;
    }else{
        document.getElementById('heading').style.display = 'block';
        btn.textContent = "Hide";
        n=1;
    }
}

var body = document.querySelector('body');
function getColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}
for (let index = 1; index<1000 ; index++) {
    console.log(Date());
    body.style.backgroundColor = getColor();
    console.log(getColor());
    console.log(index);
    sleep(3000);
    console.log(Date());
    // document.querySelector('span').style.color = color;
    // document.innerHTML = "<span>"+index+"</span>"
}
