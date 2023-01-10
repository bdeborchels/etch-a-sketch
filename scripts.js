const container = document.getElementById("container");

function promptMe(){
    let number = prompt("Resize the square to Sketch");
    makeRows(number);
}

function makeRows(number) {
  container.style.setProperty('--grid-rows', number);
  container.style.setProperty('--grid-cols', number);
  for (i = 0; i < (number * number); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = 'black';
    });
}
}
