let container = document.getElementById("container")
let size = 16;

let generateGrid = () => {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < size; i++) {
        let newElement = document.createElement("div");
        newElement.setAttribute("style", "flex: 1; display: flex;");
        for (let k = 0; k < size; k++) {
            let newRowElement = document.createElement("div");
            newRowElement.setAttribute("style", "flex: 1");
            newElement.appendChild(newRowElement);
            
            newRowElement.addEventListener("mouseover", (event) => {
                    let randomNumber1 = Math.floor(Math.random() * 255);
                    let randomNumber2 = Math.floor(Math.random() * 255);
                    let randomNumber3 = Math.floor(Math.random() * 255);
                    console.log(randomNumber1, randomNumber2,  randomNumber3)
                    newRowElement.setAttribute("style", `flex: 1; background-color: rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`);
                    // newRowElement.style.backgroundColor = rgb(randomNumber1, randomNumber2, randomNumber3);
            })
        } 
        container.appendChild(newElement);
    }
}
generateGrid();
let resolutionChange = document.getElementById("resolution-change");

resolutionChange.addEventListener("click", () => {
        let newResolution = prompt("Enter resoluton below 1000 squares per side");
        if (newResolution < 1000) {size = newResolution;}
        generateGrid();
    })

