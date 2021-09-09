var button = document.getElementsByClassName("accordion");
var ok = document.getElementsByClassName("fa-arrow-circle-down")
console.log(button);

for(var i = 0; i < button.length; i++) 
{
  button[i].onclick = function() {
    var panel = this.nextElementSibling;
    this.lastElementChild.classList.toggle("fa-arrow-circle-up")
    console.log(panel);
    if(panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
