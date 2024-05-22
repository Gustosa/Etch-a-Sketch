const new_grid_button = document.querySelector("#new-grid button")
const container = document.querySelector("#container")

function randomizeRBG() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const rgb = "rgb(" + red + ", " + green + ", " + blue + ")"

    return rgb
}

function createGrid(squares) {
    container.innerHTML = ""

    for (let i = 0; i < squares; i++) {
        const column = document.createElement("div")
        column.setAttribute("class", "column")

        for (let q = 0; q < squares; q++) {
            const square = document.createElement("div")
            square.setAttribute("class", "square")
            square.style = `background-color: ${randomizeRBG()}; opacity: 1`

            square.addEventListener("mouseenter", (event) => {
                if (square.style.opacity > 0) {
                    event.target.style.opacity -= 0.1
                }
            })

            column.appendChild(square)
        }

        container.appendChild(column)
    }
}

new_grid_button.addEventListener("click", () => {
    const squares = parseInt(prompt("Please, enter the size (between 1 and 100) of the new grid:"))
    createGrid(squares)
})

createGrid(16)