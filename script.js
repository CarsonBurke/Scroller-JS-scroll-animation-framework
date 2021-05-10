window.onload = function() {

    let displayBlock = document.getElementById("displayBlock")
    let addDisplay = document.getElementById("addDisplay")

    console.log(displayBlock)
}

let startBlockRan = false

function startBlock() {

    if (startBlockRan == false) {

        displayBlock.style.borderRadius = "0"
        displayBlock.style.width = "100px"
        displayBlock.style.height = "100px"
        displayBlock.innerHTML = "Still"
        displayBlock.classList.add("animate")
        displayBlock.style.animation = "sill 1.5s infinite"
        animateItem()

        addDisplay.style.cursor = "default"
        displayBlock.style.cursor = "default"

        startBlockRan = true
    }
}

function upChoice() {

    if (displayBlock.classList.contains("animate")) {

        displayBlock.innerHTML = "Up"
        displayBlock.classList.add("floatUp")
        displayBlock.classList.remove("floatDown")
        displayBlock.classList.remove("floatLeft")
        displayBlock.classList.remove("floatRight")
        animateItem()
    }
}

function downChoice() {

    if (displayBlock.classList.contains("animate")) {

        displayBlock.innerHTML = "Down"
        displayBlock.classList.remove("floatUp")
        displayBlock.classList.add("floatDown")
        displayBlock.classList.remove("floatLeft")
        displayBlock.classList.remove("floatRight")
        animateItem()
    }
}

function leftChoice() {

    if (displayBlock.classList.contains("animate")) {

        displayBlock.innerHTML = "Left"
        displayBlock.classList.remove("floatUp")
        displayBlock.classList.remove("floatDown")
        displayBlock.classList.add("floatLeft")
        displayBlock.classList.remove("floatRight")
        animateItem()
    }
}

function rightChoice() {

    if (displayBlock.classList.contains("animate")) {

        displayBlock.innerHTML = "Right"
        displayBlock.classList.remove("floatUp")
        displayBlock.classList.remove("floatDown")
        displayBlock.classList.remove("floatLeft")
        displayBlock.classList.add("floatRight")
        animateItem()
    }
}

function stillChoice() {

    if (displayBlock.classList.contains("animate")) {

        displayBlock.innerHTML = "Still"
        displayBlock.classList.remove("floatUp")
        displayBlock.classList.remove("floatDown")
        displayBlock.classList.remove("floatLeft")
        displayBlock.classList.remove("floatRight")
        animateItem()
    }
}