/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
const modal = document.getElementById('modal')
const modal_btn = document.getElementById('modal-btn');
const start_btn = document.getElementById('startBtn')
const canvas = document.querySelector('canvas'),
        canvasLeft = canvas.offsetLeft,
        canvasTop = canvas.offsetTop,
        ctx = canvas.getContext('2d'),
        circles = [];

document.addEventListener("DOMContentLoaded", () => {

    start_btn.addEventListener("click", () => {
        document.getElementById("modal").classList.add("hidden")
        modal.style.display = "none"
    })

    modal_btn.onclick = function () {
        modal.style.display = "block"
    }
})

canvas.width = innerWidth
canvas.height = innerHeight

var Circle = function(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Circle.prototype.isHitBy = function(x, y) {
    var distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2))
    return distance <= this.radius;
}

var circle = new Circle(150, 150, 35, "red");

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false)
ctx.fillStyle = circle.color
ctx.fill();
ctx.closePath()

canvas.addEventListener('click', function(e) {
    var canvasBounds = canvas.getBoundingClientRect();

    var clickX = e.pageX - canvasBounds.left;
    var clickY = e.pageY - canvasBounds.top;

    if (circle.isHitBy(clickX, clickY)) {
        // console.log('hit')
        this.remove()
    }

})

// class movingTarget {
//     constructor(x, y, radius, color, velocity) {
//         this.x = x
//         this.y = y
//         this.radius = radius
//         this.color = color
//         this.velocity = velocity
//     }

//     draw(ctx) {
//         ctx.beginPath();
//         ctx.lineWidth = 3;
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         ctx.stroke();
//         ctx.fillStyle = this.color
//         ctx.fill()
//         ctx.closePath();
//     }

// }

// const target = new movingTarget(100, 100, 30, "red")
// target.draw(ctx)

// const hitCanvas = document.querySelector('canvas')
// const hitCtx = hitCanvas.getContext('2d')

// const colorsHash = {};

// function getRandomColor() {
//     const r = Math.round(Math.random() * 255)
//     const g = Math.round(Math.random() * 255)
//     const b = Math.round(Math.random() * 255)
//     return `rgb(${r}, ${g}, ${b})`;
// }

// canvas.addEventListener('click', (e) => {
//     const pos = {
//         x: e.clientX,
//         y: e.clientY
//     };
//     if (isIntersect(mousePoint, target)) {
//         console.log('go')
//     }
// })


/******/ })()
;
//# sourceMappingURL=bundle.js.map