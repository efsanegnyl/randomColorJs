
let codeText = document.querySelector(".codeText")
let btn = document.querySelector("button")
let copyEl = document.querySelector(".copy")
let inputText = document.querySelector("input")

getNewColor()

btn.addEventListener("click", getNewColor)
copyEl.addEventListener("click", copy)

function copy() {
    inputText.select();
    inputText.setSelectionRange(0, 4); /* For mobile devices */
    navigator.clipboard.writeText(inputText.value);
    notification('Code copied to your clipboard ')
}

function notification(msg) {

    let old_div = document.querySelector('.alert');
    if (old_div) {
        old_div.parentNode.removeChild(old_div);
    }

    let div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = msg;
    document.body.appendChild(div);
  setTimeout(() => div.classList.add('active'), 1);
    setTimeout(() => div.classList.remove('active'), 1000);

}


function getNewColor() {
  let sybomls, color
  sybomls = "0123456789abcdef"

  color = "#";
  for (var i = 0; i < 6; i++) {
      color = color + sybomls[Math.floor(Math.random() * 16)]
  }
  document.body.style.background = color;
  btn.style.color = color;
  copyEl.style.color = color;
  copyEl.style.borderolor = color;

  codeText.innerHTML = color
  inputText.value = color
}


window.addEventListener('keypress', (e) => {
   if (e.keyCode === 32) {
       getNewColor();
   } else if (e.keyCode === 99) {
       copy()
   }
   e.preventDefault();
});