let images = [
"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg",
"img5.jpg",
"img6.jpg",
"img7.jpg"
]

let index = 0

function changeImage(){

index++

if(index >= images.length){
index = 0
}

document.getElementById("mainImage").src = images[index]

}

setInterval(changeImage,3000)