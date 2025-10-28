const button = document.getElementById("btn")
const span = document.getElementById("count")
let counti=0

button.addEventListener("click", ()=>{
    counti++;
    span.textContent= `Ich liebe dich ${counti} mal`
})

