const body = document.body;
const input = document.querySelector("#image_input")
const container = document.querySelector("#container")
const numberArea = document.querySelector("#number_post")
const popup = document.querySelector("#pop-up")
var number_post = 0
var uploader = ""
input.onclick = function(){
    this.value = null;
}

function updateNumberPost()
{
    var str = number_post.toString().bold()
    if (number_post > 1) { 
        numberArea.innerHTML = str + " posts"
    }
    else {
        numberArea.innerHTML = str + " post"
    }
}

function toggle()
{
    var blur = document.querySelector("#blur")
    blur.classList.toggle('active')
}
console.log(body)
// body.addEventListener("click", function(e) {
//     if (e.target.classList === "")
//     //toggle()
// })
input.addEventListener("change", function(e) {
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploader = reader.result
        var display = document.createElement("div")
        display.setAttribute("id", "display_image")
        display.setAttribute("src", `url(${uploader})`)
        display.style.backgroundImage = `url(${uploader})`
        container.insertBefore(display, container.firstChild)
        number_post++
        display.addEventListener("click", function(e) {
            //display.remove()
            //number_post--
            //updateNumberPost()
            toggle()
            var popupimg = document.createElement("div")
            popupimg.setAttribute("id", "display_image")
            popupimg.style.backgroundImage = display.getAttribute("src")
            popupimg.style.transform = "scale(2)";
            popup.insertBefore(popupimg, popup.firstChild)
        })
        updateNumberPost()
    })
    reader.readAsDataURL(this.files[0])
})

