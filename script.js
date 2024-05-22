const new_grid_button = document.querySelector("#new-grid button")
const container = document.querySelector("#container")

function createGrid(squares) {
    container.innerHTML = ""

    for (let i = 0; i < squares; i++) {
        const column = document.createElement("div")
        column.setAttribute("class", "column")

        for (let q = 0; q < squares; q++) {
            const square = document.createElement("div")
            square.setAttribute("class", "square")
            square.addEventListener("mouseout", (event) => {
                if (!event.target.classList.contains("hover"))
                    event.target.classList.add("hover")
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