import './style.css'
import 'flowbite';

const orientasi = document.querySelector("#orientasi")
const startColor = document.querySelector("#start-color");
const endColor = document.querySelector("#end-color");
const codePreview = document.querySelector("#code-preview")
const textPreview = document.querySelector("#text-preview")
const inputDeg = document.querySelector("#input-deg");
const previewDeg = document.querySelector("#preview-deg");


inputDeg.addEventListener("input", (e) =>{
    previewDeg.textContent = e.target.value + "%";
});
document.querySelector("#btn-result").addEventListener("click", () => {
    if(orientasi.value === "linear"){
        textPreview.classList.replace("text-white", "text-transparent")
        textPreview.style.backgroundImage = `linear-gradient(${inputDeg.value}deg, ${startColor.value} , ${endColor.value} )`;
    }

    const tailwindClass = `bg-clip-text text-transparent bg-gradient-to-r from-[${startColor.value}] to-[${endColor.value}]`;

    codePreview.textContent = tailwindClass;
});

