let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(saveEl)

let count = 0
function increment() {
    count += 1 
    countEl.innerText = count
}

function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
