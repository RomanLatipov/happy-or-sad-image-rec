const fileInput = document.querySelector(".default-file-input");
const dragDropText = document.querySelector(".dynamic-message");
const draggableFileArea = document.querySelector(".drag-file-area");

const uploadedFile = document.querySelector(".file-block");
const fileName = document.querySelector(".file-name");
const fileSize = document.querySelector(".file-size");
const progressBar = document.querySelector(".progress-bar");
const removeFileButton = document.querySelector(".remove-file-icon");
const uploadButton = document.querySelector(".upload-button");
const fileFlag = 0;

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

    fileName.innerHTML = fileInput.files[0].name;
    fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    let width = 0;
        let id = setInterval(frame, 50);
        function frame() {
            if (width >= 390) {
                clearInterval(id);
                uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
            } 
            else {
                width += 5;
                progressBar.style.width = width + "px";
            }
        }
    fileFlag = 0;
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
removeFileButton.addEventListener("click", () => {
    uploadedFile.style.cssText = "display: none;";
    fileInput.value = '';
    uploadIcon.innerHTML = 'file_upload';
    dragDropText.innerHTML = 'Drag & drop any file here';
    document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
    uploadButton.innerHTML = `Upload`;
});