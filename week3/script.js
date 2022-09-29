
let clrButton = document.getElementById("colorBtn")
console.log(clrButton)
    const mnElement = document.getElementById("mainElem")
    const txtbutton = document.getElementById("textBtn")
    const imageButton = document.getElementById("imageBtn")

const addSomeText = () =>{
    let htmlElem = document.createElement("h3")
    let someText = "This is a string of text!"
    htmlElem.innerText = someText

    mnElement.appendChild(htmlElem)
}

const addAnImage = ()=>{
    let imgElem = document.createElement("img")
    imgElem.src = "https://d2mug8yhikhiqv.cloudfront.net/wp-content/uploads/2014/02/30101331/smiley-face-chaitanya-pillala-zDDdoYqQ64U-unsplash-700.jpg"
    imgElem.alt = "smiley-face"
    
    mnElement.appendChild(imgElem)

    }
txtbutton.addEventListener("click", addSomeText)
imageButton.addEventListener("click", addAnImage)
clrButton.addEventListener("click", ()=>{
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    console.log(red)
    mnElement.style.backgroundColor = "rgb(" + red + " , " + green + " , " + blue + ")"
})