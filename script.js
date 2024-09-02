function bubblemaker() {
    let code = "";
    for (let i = 0; i <= 59; i++) {
        let random = Math.floor(Math.random()*10);
        code += `<div class="buuble">${random}</div>`;
    }
    document.querySelector('.buuble-place').innerHTML = code;
}

let hit ;
function hitbutton() {
    hit = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent = hit;
}

let timerun = 10;
function runtimer () {
    setInterval(() => {
       if (timerun > 0) {
        timerun--;
        document.querySelector("#timer").textContent = timerun;
       } else {
        clearInterval();
        let last = document.querySelector(".buuble-place")
        last.innerHTML = `<h1>"Game Over, Your Final Score is ${score}"</h1>`
        last.style.color = "lightblue";
       }
    }, 1000);
}

let score = 0;
function scorescope() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".buuble-place").addEventListener("click", function (details) {
    let clicked = Number(details.target.textContent);
    if(clicked == hit){
        scorescope();
        bubblemaker();
        hitbutton();
    }
})

bubblemaker();
hitbutton();
runtimer();