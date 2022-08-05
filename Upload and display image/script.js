let choosebtn=document.querySelector("button")
let inputimage=document.querySelector("input")
let imagediv=document.querySelector(".maindiv")
let file
let url
choosebtn.onclick=()=>{
    inputimage.click()
}
inputimage.addEventListener("input",()=>{
    file=inputimage.files[0]
    url=URL.createObjectURL(file)
    imagediv.innerHTML=`<img src="${url}" alt="">`
})