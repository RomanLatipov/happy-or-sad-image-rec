let fileInput = document.querySelector(".default-file-input");

fileInput.addEventListener("change", e => {
    console.log(" > " + fileInput.value);
});

function uploadImage() {
    event.preventDefault();
    fetch("http://127.0.0.1:5555/upload", {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "string": "hello"
        })
    })
    .then(res => res.json())
    .then(data => console.log("successful return: "+ data ))
    
}