let fileInput = document.querySelector(".default-file-input");

fileInput.addEventListener("change", e => {
    console.log(" > " + fileInput.value);
});

fetch("http://127.0.0.1:5555")
.then(res => res.json())
.then(data => console.log(data))