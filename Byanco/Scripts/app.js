
function app() {
    let canvas = $('#canvas')[0];
    let context = canvas.getContext("2d");    
    let boxes = [];
    let idx = 0;

    function gameLoop() {     
        moveBoxes();
        draw();
        checkBounds();
    }

    function moveBoxes() {
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            box.x += box.xSpeed * box.speed;
            box.y += box.ySpeed * box.speed;
        }
    }

    function checkBounds() {
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            if (box.x + box.w >= canvas.width || box.x <= 0) 
                box.xSpeed = -box.xSpeed;

            if (box.y + box.h >= canvas.height || box.y <= 0)
                box.ySpeed = -box.ySpeed;            
        }
    }

    function draw() {
        clear();
        drawBox();
    }

    function drawBox() {
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            context.fillStyle = box.color;
            context.fillRect(box.x, box.y, box.w, box.h);
            context.stroke();
        }       
    }

    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
    }

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        makeBoxes();
        window.setInterval(() => { gameLoop(); }, 1000 / 60);
    }

    function makeBoxes() {
        for (var i = 0; i < 1500; i++) {
            let size = randInt(50, 80);
            let x = randInt(0, canvas.width - size);
            let y = randInt(0, canvas.height - size);

            let color = 'rgb(' + randInt(0, 255) + ', ' + randInt(0, 255) + ', ' + randInt(0, 255) + ')';
            let speed = rand(.8, 1.5);

            boxes.push(new box(x, y, size, size, color, speed));
        }
    }

    function rand(lo, hi) {
        return (Math.random() * hi) + lo;
    }

    function randInt(lo, hi) {
        return Math.floor(Math.random() * hi) + lo;
    }

    init();
}

function box(x, y, w, h, color, speed) {
    return {
        x: x,
        y: y,
        w: w,
        h: h,
        color: color,
        speed: speed,
        xSpeed: 1,
        ySpeed: 1
    };
}

$(document).ready(() => {
    app();
});
