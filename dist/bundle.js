/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
// modal start button
const start_btn = document.getElementById('startBtn')
document.addEventListener("DOMContentLoaded", () => {

    start_btn.addEventListener("click", () => {
        document.getElementById("modal").classList.add("hidden")
    })
})

// Variables
let gameCanvas = new canvas();
let cursor = new mouse();

// Setup
gameCanvas.setSize(innerWidth, innerHeight);

// Run it !
run();

// Global Class
function canvas() {

    // Canvas
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.centerLeft;
    this.centerTop;

    // Cursor
    this.cursorX = -50;
    this.cursorY = -50;

    // Game Settings
    this.currentView = "menu";
    this.mode;

    // Listener
    this.canvas.addEventListener('mousemove', function (e) {

        this.boundingClientRect = this.getBoundingClientRect();
        gameCanvas.cursorX = e.clientX - this.boundingClientRect.left;
        return gameCanvas.cursorY = e.clientY - this.boundingClientRect.top;

    })
    this.canvas.addEventListener('mousedown', function () {

        // Menu Event
        if (gameCanvas.currentView === "menu") {

            // Survival Mode Icon
            if (gameCanvas.cursorX > gameCanvas.centerLeft - 75
                && gameCanvas.cursorX < gameCanvas.centerLeft + 75
                && gameCanvas.cursorY > gameCanvas.centerTop - 50
                && gameCanvas.cursorY < gameCanvas.centerTop + 100) {

                gameCanvas.mode = new survivalMode();
                return gameCanvas.currentView = "survivalMode";

            }

            // God Mode Icon
            if (gameCanvas.cursorX > gameCanvas.centerLeft + 100
                && gameCanvas.cursorX < gameCanvas.centerLeft + 250
                && gameCanvas.cursorY > gameCanvas.centerTop - 50
                && gameCanvas.cursorY < gameCanvas.centerTop + 100) {
                gameCanvas.mode = new godMode();
                return gameCanvas.currentView = "godMode";

            }

            // Timed Mode Icon
            if (gameCanvas.cursorX > gameCanvas.centerLeft - 250
                && gameCanvas.cursorX < gameCanvas.centerLeft - 100
                && gameCanvas.cursorY > gameCanvas.centerTop - 50
                && gameCanvas.cursorY < gameCanvas.centerTop + 100) {

                gameCanvas.mode = new timedMode();
                return gameCanvas.currentView = "timedMode";
            }
            

        }

        if (gameCanvas.currentView === "survivalMode") {

            gameCanvas.mode.shootFail += 1;

            gameCanvas.mode.targets.find(function (e, index) {

                this.dx = gameCanvas.cursorX - e.x;
                this.dy = gameCanvas.cursorY - e.y;
                this.dist = Math.abs(Math.sqrt(this.dx * this.dx + this.dy * this.dy));

                if (this.dist <= e.size) {

                    gameCanvas.mode.shootFail -= 1;
                    gameCanvas.mode.score += 1;
                    return gameCanvas.mode.targets.splice(index, 1);

                }

            })

        }

        if (gameCanvas.currentView === "godMode") {

            gameCanvas.mode.shootFail += 1;

            gameCanvas.mode.targets.find(function (e, index) {

                this.dx = gameCanvas.cursorX - e.x;
                this.dy = gameCanvas.cursorY - e.y;
                this.dist = Math.abs(Math.sqrt(this.dx * this.dx + this.dy * this.dy));

                if (this.dist <= e.size) {

                    gameCanvas.mode.shootFail -= 1;
                    gameCanvas.mode.score += 1;
                    return gameCanvas.mode.targets.splice(index, 1);

                }

            })

        }

        if (gameCanvas.currentView === "timedMode") {

            gameCanvas.mode.shootFail += 1;

            gameCanvas.mode.targets.find(function (e, index) {

                this.dx = gameCanvas.cursorX - e.x;
                this.dy = gameCanvas.cursorY - e.y;
                this.dist = Math.abs(Math.sqrt(this.dx * this.dx + this.dy * this.dy));

                if (this.dist <= e.size) {

                    gameCanvas.mode.shootFail -= 1;
                    gameCanvas.mode.score += 1;
                    return gameCanvas.mode.targets.splice(index, 1);

                }

            })

        }

        // setTimeout(function () {

        //     gameCanvas.cursorSound.splice(gameCanvas.cursorSound[gameCanvas.cursorSound.length - 1], 1);

        // }, 2000);

    })
    document.addEventListener('keydown', function (e) {

        if (e.code === "Escape") {

            gameCanvas.mode = null;
            return gameCanvas.currentView = "menu";

        }

    })

    this.setSize = function (x, y) {

        this.canvas.width = x;
        this.canvas.height = y;
        this.centerLeft = this.canvas.width / 2;
        return this.centerTop = this.canvas.height / 2;

    }

    this.clear = function () {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

    this.controller = function () {

        if (this.currentView === "menu") {

        }

        if (this.currentView === "survivalMode") {

            if (this.mode.life <= 0) {

            }
            this.mode.addTarget();

        }

        if (this.currentView === "godMode") {

            if (this.mode.life <= 0) {

            }

            this.mode.addTarget();

        }

        if (this.currentView === "timedMode") {

            if (this.mode.timer <= 0) {

            }
            this.mode.addTarget();

        }

        return this.view(this.currentView);

    }

    this.view = function (type) {

        this.clear();

        if (type === "menu") {

            this.ctx.fillStyle = "red";
            this.ctx.shadowBlur = 50;
            this.ctx.shadowColor = "white"
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "center";
            this.ctx.font = "50px Open Sans";
            this.ctx.fillText('AIM ACADEMY', this.centerLeft, this.centerTop - 120);

            // social images
            // let img1 = document.getElementById("github");
            // let img2 = document.getElementById("linkedin")
            // this.ctx.drawImage(img1, this.centerLeft + 10, this.centerTop + 125, 60, 60)
            // this.ctx.drawImage(img2, this.centerLeft - 70, this.centerTop + 125, 60, 60)

            // time mode
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = "black";
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(this.centerLeft - 250, this.centerTop - 50, 150, 150);
            // survival mode
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(this.centerLeft - 75, this.centerTop - 50, 150, 150);
            // god mode
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(this.centerLeft + 100, this.centerTop - 50, 150, 150);

            // Timed Mode box

            gameCanvas.ctx.fillStyle = "#c8c8c8";

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 45, this.centerTop - 20, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 25, this.centerTop + 20, 20, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 25, this.centerTop + 50, 5, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 45, this.centerTop + 70, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 5, this.centerTop + 60, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 35, this.centerTop, 15, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 30, this.centerTop + 50, 20, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.fillStyle = "#e40700";
            gameCanvas.ctx.textAlign = "center";
            gameCanvas.ctx.textBaseline = "center";
            gameCanvas.ctx.font = "24px Open Sans";
            gameCanvas.ctx.fillText("Survival Mode", this.centerLeft, this.centerTop + 30);

            // infinity mode box

            gameCanvas.ctx.fillStyle = "#c8c8c8";

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 220, this.centerTop - 20, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 200, this.centerTop + 20, 20, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 200, this.centerTop + 50, 5, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 220, this.centerTop + 70, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 170, this.centerTop + 60, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 135, this.centerTop, 15, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft - 140, this.centerTop + 50, 20, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.fillStyle = "#e40700";
            gameCanvas.ctx.textAlign = "center";
            gameCanvas.ctx.textBaseline = "center";
            gameCanvas.ctx.font = "26px Open Sans";
            gameCanvas.ctx.fillText("Timed Mode", this.centerLeft - 175, this.centerTop + 30);
            
            // God Mode Box

            gameCanvas.ctx.fillStyle = "#c8c8c8";

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 220, this.centerTop - 20, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 200, this.centerTop + 20, 20, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 200, this.centerTop + 50, 5, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 220, this.centerTop + 70, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 170, this.centerTop + 60, 10, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 135, this.centerTop, 15, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.beginPath();
            gameCanvas.ctx.arc(this.centerLeft + 140, this.centerTop + 50, 20, 0, 2 * Math.PI);
            gameCanvas.ctx.closePath();
            gameCanvas.ctx.fill();

            gameCanvas.ctx.fillStyle = "#e40700";
            gameCanvas.ctx.textAlign = "center";
            gameCanvas.ctx.textBaseline = "center";
            gameCanvas.ctx.font = "26px Open Sans";
            gameCanvas.ctx.fillText("God Mode", this.centerLeft + 175, this.centerTop + 30);


        } else if (type === "survivalMode") {

            if (this.mode.life === 0) {

                gameCanvas.ctx.fillStyle = "white";
                gameCanvas.ctx.textAlign = "center";
                gameCanvas.ctx.textBaseline = "center";
                gameCanvas.ctx.font = "50px Open Sans";
                gameCanvas.ctx.fillText("Game Over", this.centerLeft, this.centerTop - 80);
                gameCanvas.ctx.font = "30px Open Sans";
                gameCanvas.ctx.fillText("Score : " + this.mode.score, this.centerLeft, this.centerTop - 40);
                gameCanvas.ctx.fillText("Press ESCAPE", this.centerLeft, this.centerTop + 120);

            } else {

                this.ctx.fillStyle = "white";
                this.ctx.textAlign = "center";
                this.ctx.textBaseline = "center";
                this.ctx.font = "80px Open Sans";
                this.ctx.fillText('♥'.repeat(this.mode.life), this.centerLeft, this.centerTop - 40);

                gameCanvas.ctx.font = "30px Open Sans";
                gameCanvas.ctx.fillText("Score : " + this.mode.score, this.centerLeft, this.centerTop);
                gameCanvas.ctx.fillText("Miss : " + this.mode.shootFail, this.centerLeft, this.centerTop + 40);

                this.mode.getTargets();

            }

        } else if (type === "godMode") {

            if (this.mode.life === 0) {

                gameCanvas.ctx.fillStyle = "white";
                gameCanvas.ctx.textAlign = "center";
                gameCanvas.ctx.textBaseline = "center";
                gameCanvas.ctx.font = "50px Open Sans";
                gameCanvas.ctx.fillText("Game Over", this.centerLeft, this.centerTop - 80);
                gameCanvas.ctx.font = "30px Open Sans";
                gameCanvas.ctx.fillText("Score : " + this.mode.score, this.centerLeft, this.centerTop - 40);
                gameCanvas.ctx.fillText("Press ESCAPE", this.centerLeft, this.centerTop + 120);

            } else {

                this.ctx.fillStyle = "white";
                this.ctx.textAlign = "center";
                this.ctx.textBaseline = "center";
                this.ctx.font = "80px Open Sans";
                this.ctx.fillText('♥'.repeat(this.mode.life), this.centerLeft, this.centerTop - 40);

                gameCanvas.ctx.font = "30px Open Sans";
                gameCanvas.ctx.fillText("Score : " + this.mode.score, this.centerLeft, this.centerTop);
                gameCanvas.ctx.fillText("Miss : " + this.mode.shootFail, this.centerLeft, this.centerTop + 40);

                this.mode.getTargets();

            }

        } else if (type === "timedMode") {

            if (this.mode.timer === 0) {

                gameCanvas.ctx.fillStyle = "white";
                gameCanvas.ctx.textAlign = "center";
                gameCanvas.ctx.textBaseline = "center";
                gameCanvas.ctx.font = "50px Open Sans";
                gameCanvas.ctx.fillText("Game Over", this.centerLeft, this.centerTop - 80);
                gameCanvas.ctx.font = "30px Open Sans";
                gameCanvas.ctx.fillText("Score : " + this.mode.score, this.centerLeft, this.centerTop - 40);
                gameCanvas.ctx.fillText("Press ESCAPE", this.centerLeft, this.centerTop + 120);

            } else {

                gameCanvas.ctx.fillStyle = "white";
                gameCanvas.ctx.textAlign = "center";
                gameCanvas.ctx.textBaseline = "center";
                gameCanvas.ctx.font = "30px Open Sans";
                gameCanvas.ctx.fillText("Time : " + this.mode.timer, this.centerLeft, this.centerTop - 40);
                gameCanvas.ctx.fillText("Score : " + this.mode.score, this.centerLeft, this.centerTop);
                gameCanvas.ctx.fillText("Miss : " + this.mode.shootFail, this.centerLeft, this.centerTop + 40);

                this.mode.time();
                this.mode.getTargets();

            }

        }

        // return cursor.show();

    }

}

function mouse() {

    let crosshair = document.querySelector('canvas')
    crosshair.onmouseover = function() {
        this.style.cursor = "crosshair"
        this.style.color = "green"
    }

}

// Timed Mode
function timedMode() {

    this.score = 0;
    this.shootFail = 0;
    this.targets = [];
    this.timer = 6000 // Ms
    this.targetsMaxSize = 50; // Unity : Pixel
    this.targetsRapidity = 0.2; // Unity : Pixel
    this.targetsTime = 500 - (this.score * 5); // Unity : Mills
    this.targetsLastAdd = Date.now();

    this.time = function () {
        if (this.timer > 0) {
            this.timer--
        }
    }

    this.addTarget = function () {

        if (this.targets.length < 10 && Date.now() > this.targetsLastAdd + this.targetsTime) {

            this.targets.push(new target());
            return this.targetsLastAdd = Date.now();

        }

    }

    this.getTargets = function () {

        this.targets.forEach(function (value, index) {

            if (value.reset === true && value.size <= 0) {

                gameCanvas.mode.targets.splice(index, 1);
                return gameCanvas.mode.life -= 1;

            }

            return value.draw();

        });

    }

}

function survivalMode() {

    this.life = 3;
    this.score = 0;
    this.shootFail = 0;
    this.targets = [];
    this.targetsMaxSize = 50; // Unity : Pixel
    this.targetsRapidity = 0.35; // Unity : Pixel
    this.targetsTime = 1000 - (this.score * 5); // Unity : Mills
    this.targetsLastAdd = Date.now();

    this.addTarget = function () {

        if (this.targets.length < 5 && Date.now() > this.targetsLastAdd + this.targetsTime) {

            this.targets.push(new target());
            return this.targetsLastAdd = Date.now();

        }

    }

    this.getTargets = function () {

        this.targets.forEach(function (value, index) {

            if (value.reset === true && value.size <= 0) {

                gameCanvas.mode.targets.splice(index, 1);
                return gameCanvas.mode.life -= 1;

            }

            return value.draw();

        });

    }

}

function godMode() {

    this.life = 3;
    this.score = 0;
    this.shootFail = 0;
    this.targets = [];
    this.targetsMaxSize = 35; // Unity : Pixel
    this.targetsRapidity = 0.35; // Unity : Pixel
    this.targetsTime = 500 - (this.score * 5); // Unity : Mills
    this.targetsLastAdd = Date.now();

    this.addTarget = function () {

        if (this.targets.length < 10 && Date.now() > this.targetsLastAdd + this.targetsTime) {

            this.targets.push(new target());
            return this.targetsLastAdd = Date.now();

        }

    }

    this.getTargets = function () {

        this.targets.forEach(function (value, index) {

            if (value.reset === true && value.size <= 0) {

                gameCanvas.mode.targets.splice(index, 1);
                return gameCanvas.mode.life -= 1;

            }

            return value.draw();

        });

    }

}

function target() {

    this.x = rand(gameCanvas.mode.targetsMaxSize, gameCanvas.canvas.width - gameCanvas.mode.targetsMaxSize);
    this.y = rand(gameCanvas.mode.targetsMaxSize, gameCanvas.canvas.height - gameCanvas.mode.targetsMaxSize);
    this.size = 0;
    this.reset = false;

    this.draw = function () {

        if (this.size < gameCanvas.mode.targetsMaxSize && this.reset === false) {

            this.size += gameCanvas.mode.targetsRapidity;

        } else {

            this.reset = true;

            if (this.size - gameCanvas.mode.targetsRapidity < 0) {
                return this.size = 0;
            }

            this.size -= gameCanvas.mode.targetsRapidity;

        }

        gameCanvas.ctx.fillStyle = "red";
        gameCanvas.ctx.beginPath();
        gameCanvas.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        gameCanvas.ctx.closePath();
        gameCanvas.ctx.fill();

    }

}


// Functions

function rand(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

function run() {

    gameCanvas.controller();
    window.requestAnimationFrame(run);

}
/******/ })()
;
//# sourceMappingURL=bundle.js.map