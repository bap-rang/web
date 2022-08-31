const input = document.querySelector("#image_input")
const container = document.querySelector("#container")
const numberArea = document.querySelector("#number_post")
var number_post = 0
var uploader = ""
 input.onclick = function(){
     this.value = null;
}
input.addEventListener("change", function(e) {
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploader = reader.result
        var display = document.createElement("div")
        display.setAttribute("id", "display_image")
        display.style.backgroundImage = `url(${uploader})`
        container.insertBefore(display, container.firstChild)
        number_post++
        var str = number_post.toString().bold()
        if (number_post > 1) { 
            numberArea.innerHTML = str + " posts"
        }
        else {
            numberArea.innerHTML = str + " post"
        }
    })
    reader.readAsDataURL(this.files[0])
})