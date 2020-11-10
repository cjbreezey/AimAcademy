# Aim Academy

[Live Site](https://cjbreezey.github.io/AimAcademy/)

## Aim Academy
[![Image from Gyazo](https://i.gyazo.com/3dece620a714a3309b59f3f5d5fba3cf.gif)](https://gyazo.com/3dece620a714a3309b59f3f5d5fba3cf)

## Background

Aim Academy is a game designed to help improve your mouse speed and accuracy. The game has three modes to test out and play; Timed, Survival, or God Mode. The rules are simple, use your mouse (or trackpad) to click objects that will randomly appear on screen. In timed mode, you have 1 minute to click as many object as you can before time runs out. In Survival mode, you have 3 lives to survive for as long as you can. You lose lives by having a target open and close without being clicked on. God mode is just like survival mode, except the targets are smaller, open and close faster, and appear at a more frequent rate.

This Game was built using only vanilla Javascript and HTML5 Canvas

## Technologies

* Vanilla Javascript
* HTML 
* CSS

## Features

The main features of Aim Academy are the 3 game modes provided. However, I wanted the object to appear randomly but keep the game challenging. The key to this was creating a randomizer to determine a x,y coordinate for the object to appear and have it expand around that position. 

```js
function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
```

This was able to make my objects randomly appear, but that wasn't enough to have a mode thats challenging. In the following code snippet, the functionality was simple enough to make a mode that was challenging, by simply increasing the rapidity of the object opening and closing. Doing so made "godMode" just a tiny bit harder, but I still felt it was too easy to survive because the circle size was still too big. I made 3 tweaks to my code that would decrease the circle size, increase the number of targets that can appear on a page at a time, and the interval between when the next circle would appear on screen.

```js
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
```

### Timed Mode

* You have a 1 minute timer and you want to score as many objects clicked in the given time

[![Image from Gyazo](https://i.gyazo.com/52ecdf52820ca21fac17cbe5b61d86a9.gif)](https://gyazo.com/52ecdf52820ca21fac17cbe5b61d86a9)

### Survival Mode

* You have 3 lives and you want to survive as long as you can with those 3 lives

[![Image from Gyazo](https://i.gyazo.com/632d26abc11bc81be1214310ebd19fa0.gif)](https://gyazo.com/632d26abc11bc81be1214310ebd19fa0)

### God Mode

* You have 3 lives and want to survive as long as you can, except this time its 10 times harder than regular survival mode

[![Image from Gyazo](https://i.gyazo.com/4c7635b2477d9818025187ce9e503e9b.gif)](https://gyazo.com/4c7635b2477d9818025187ce9e503e9b)
