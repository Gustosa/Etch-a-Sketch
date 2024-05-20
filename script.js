const container = document.querySelector("#container")


for (let i = 0; i < 16; i++) {
    const column = document.createElement("div")
    column.setAttribute("class", "column")

    for (let q = 0; q < 16; q++) {
        const square = document.createElement("div")
        square.setAttribute("class", "square")

        column.appendChild(square)
    }

    container.appendChild(column)
}