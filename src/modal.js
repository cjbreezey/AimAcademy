var modal = document.getElementById('modal')
var modal_btn = document.getElementById('modal-btn');
var start_btn = document.getElementById('startBtn')

modal_btn.onclick = function() {
    modal.style.display = "block"
}

start_btn.addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden')
})

// document.addEventListener("DOMContentLoaded", () => {
//     let startButton = document.getElementById('start-button')

//     startButton.addEventListener('click', () => {
//         document.getElementById('').classList.add('hidden')
//     })
// })
