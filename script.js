let fileInput = document.querySelector(".default-file-input");
let string64 = "";
fileInput.addEventListener("change", e => {
    const img = fileInput.files[0];
    // console.log(img)
    const reader = new FileReader();
    reader.readAsDataURL(img);
    // console.log(reader)
    reader.onload = function(e) {
        string64 = reader.result.replace("data:", "").replace(/^.+,/, "");
        // console.log(string64);
    }
});

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
    .then(data => console.log(data.response))
}