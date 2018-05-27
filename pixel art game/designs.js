const table = document.getElementById("pixelCanvas");
function makeGrid(height, width) {
  table.innerHTML = "";
    for (let h = 1; h <= height; h++) {
        const row = table.insertRow();
        for (let w = 1; w <= width; w++) {
            const cell = row.insertCell();
            cell.onclick = colorPicker;
        };
    };
}

const color = document.getElementById("colorPicker");
function colorPicker() {
    this.style.background = color.value;
};

const sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
});