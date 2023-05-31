const container = document.querySelector(".container")
const refreshBtn = document.querySelector(".refresh-btn")

const maxPaletteBoxes = 35;

generatePalette=()=>{
    container.innerHTML = "";   // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // generateing a random hex color code
    let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6,"0")}`;

    // create a new 'li' element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="react-box" style="background:${randomHex}"; ></div>
     <span class="hex-value">${randomHex}</span>`;

    // adding click event to current li element to copy the color
    color.addEventListener("click",() => copyColor(color, randomHex))

     container.appendChild(color);

    }
}
generatePalette();

const copyColor=(elem,hexVal)=>{  
    const colorElement = elem.querySelector(".hex-value");
    // copying the hex value,updating the text to copied,
    // and changing text back to original hex value after 1 second  
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "copied";
        setTimeout(()=>colorElement.innerText = hexVal,1000)
    }).catch(()=>alert("failed to copy the color code!"))
    //showing alert  if color can't be copied
}

refreshBtn.addEventListener("click",generatePalette)