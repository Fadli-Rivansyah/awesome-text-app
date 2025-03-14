import './style.css'

const position = document.querySelector("#position");
const startColor = document.querySelector("#start-color");
const endColor = document.querySelector("#end-color");
const codePreview = document.querySelector("#code-preview")
const textPreview = document.querySelector("#text-preview")
const inputDeg = document.querySelector("#input-deg");
const previewDeg = document.querySelector("#preview-deg");
const btnCopy = document.querySelector("#btn-copy");
const iconCopy = document.querySelector(".icon-copy");

// btn apply
document.querySelector("#btn-result").addEventListener("click", () => {
    const directionMap = {
        t: "to top",
        b: "to bottom",
        r: "to right",
        l: "to left",
        tl: "to top left",
        tr: "to top right",
        bl: "to bottom left",
        br: "to bottom right",
    }    

    const direction = directionMap[position.value || "to bottom"];
    // replace color default
    textPreview.classList.replace("text-gray-900", "text-transparent")
    textPreview.classList.replace("dark:text-white", "text-transparent")
    // set gradient with css
    textPreview.style.backgroundImage = `linear-gradient(${direction}, ${startColor.value} , ${endColor.value})`;
    const tailwindClass = `bg-clip-text text-transparent bg-gradient-to-${position.value} from-[${startColor.value}] to-[${endColor.value}]`;
    // view code tailwind
    codePreview.textContent = tailwindClass;
});

// btn copy
btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(codePreview.textContent)
    iconCopy.innerHTML= `
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
        </svg>
    `;
    setTimeout(() => iconCopy.innerHTML= `
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M14 4v3a1 1 0 0 1-1 1h-3m4 10v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2m11-3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H18a1 1 0 0 1 1 1Z"/>
        </svg>
    `, 1000);
})



