let btn = document.querySelector("#btn")
let img = document.querySelector("#bookimg");

btn.addEventListener("click", function () {
    alert("该商品暂无购买途径")
}
)

img.addEventListener("mouseenter", function () {
    img.style.width = "45%"
}



)
img.addEventListener("mouseleave", function () {
    img.style.width = "40%"
}



)
