// 1) no longer has DOM node 'main#main'
document.querySelector("main").remove();

// 2) has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement("h1")

newHeader.id = "victory"
newHeader.className = "victory"
// let newHeader = document.querySelector("h1#victory")
newHeader.innerHTML = "SAM is the champion"

// 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
