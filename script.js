const body = document.body;
const input = document.querySelector("#image_input")
const container = document.querySelector("#container")
const numberArea = document.querySelector("#number_post")
const popup = document.querySelector("#pop-up")
const blur = document.querySelector("#blur")
var number_post = 0
var uploader = ""
popup.style.display = "none";
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

function removeImage(image)
{
    image.remove();
    number_post--;
    updateNumberPost();
    popup.removeChild(popup.firstChild);
    popup.style.display = "none";
    blur.style.filter = "none";
}

function clickX(){
    document.querySelector("#pop-up span").onclick = () =>{ 
        popup.removeChild(popup.firstChild);
        popup.style.display = "none";
        blur.style.filter = "none";
    }
}

function pressEsc()
{
    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
            popup.removeChild(popup.firstChild);
            popup.style.display = "none";
            blur.style.filter = "none";
        }
    });
}
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
            blur.style.filter = "blur(20px)";
            var popupimg = document.createElement("div")
            popupimg.setAttribute("id", "display_image")
            popupimg.style.backgroundImage = display.getAttribute("src")
            popupimg.style.transform = "scale(2)";
            popup.insertBefore(popupimg, popup.firstChild)
            popup.style.display = "block";
            document.querySelector("#pop-up button").onclick = () =>{
                removeImage(display);
            }
            clickX()
            pressEsc()
        })
        updateNumberPost()
    })
    reader.readAsDataURL(this.files[0])
})




