let Lunbo = document.querySelector("#Lunbo")
let box = document.querySelector("#Mid .box")
let lbtn = document.querySelector(".lbtn")
let rbtn = document.querySelector(".rbtn")
let cl = document.querySelectorAll("#cl")
let cls = document.querySelectorAll(".cls")

let curr = 0;
let t = 3000;

rbtn.onclick = function () {
    if (curr >= 5) {
        curr = 0;
        box.style.left = 0;
        box.style.transition = ('none');
    }
    else {
        curr++;
        box.style.left = -curr * 450 + "px";
        box.style.transition = ('all .6s');
    }

}


lbtn.onclick = function () {
    if (curr < 0) {
        curr = curr + 5;
        box.style.left = "-1800px";
    }
    curr--
    box.style.left = -curr * 450 + "px";
}

let timer = setInterval(() => {
    rbtn.onclick();
}, t);

Lunbo.addEventListener('mouseenter', function () {
    clearInterval(timer)
})

Lunbo.addEventListener('mouseleave', function () {
    clearInterval(timer);
    timer = setInterval(() => {
        rbtn.onclick();
    }, t);
})




for (let i = 0; i < cls.length; i++) {
    cl[i].onclick = function () {
        if (cls[i].style.display == "block") {
            cls[i].style.display = "none";
        }
        else {
            cls[i].style.display = "block";
        }

    }
}








