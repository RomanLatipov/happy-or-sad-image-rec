const fileInput = document.querySelector(".default-file-input");
const dragDropText = document.querySelector(".dynamic-message");
const draggableFileArea = document.querySelector(".drag-file-area");

function toBase64(img) {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    // console.log(reader)
    reader.onload = function(e) {
        string64 = reader.result.replace("data:", "").replace(/^.+,/, "");
        // console.log(string64);
    }
}

draggableFileArea.addEventListener("dragover", function(event) {
    event.preventDefault();
})

draggableFileArea.addEventListener("drop", event => {
    event.preventDefault();
    console.log(event);
    const imgFile = event.dataTransfer.files[0];
    toBase64(imgFile);
    dragDropText.innerHTML = 'File Dropped Successfully!';
})

let string64 = "";

fileInput.addEventListener("change", e => {
    const imgFile = fileInput.files[0];
    toBase64(imgFile);
    
});
function dislpayEmote(emote) {
    const emoteText = document.querySelector(".emote");
    emoteText.style.display = "block";
    emoteText.innerHTML = emote;
}

function uploadImage(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:5555/upload", {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "string": string64
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dislpayEmote(data.response)})
}