//Constants
let animateItems = document.getElementsByClassName("animate")
let browserHeight = window.innerHeight


//Add in styles
addStyles()

function addStyles() {
    let styles = `
    @keyframes floatUp {
        0% {
            opacity: 0;
            top: 60px;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            top: 0;
        }
    }
    @keyframes floatDown {
        0% {
            opacity: 0;
            top: -60px;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            top: 0;
        }
    }
    @keyframes floatLeft {
        0% {
            opacity: 0;
            left: 60px;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    }
    @keyframes floatRight {
        0% {
            opacity: 0;
            left: -60px;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    }
    @keyframes still {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .animate {
        opacity: 0;
        pointer-events: none;
        position: relative;
    }
    .animateShow {
        opacity: 1;
        pointer-events: all;
        top: 0;
        left: 0;
        animation-name: still;
    }
    .floatUp {}
    .floatDown {}
    .floatLeft {}
    .floatRight {}
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

window.addEventListener("load", animateItem)

window.addEventListener("scroll", animateItem)

//Perform animations
function animateItem() {

    for (let item of animateItems) {

        if (!item.dataset.showValue) {

            item.dataset.showValue = "100"
        }

        if (!item.dataset.time) {

            item.dataset.time = "1"
        }

        item.style.animationDuration = item.dataset.time + "s"

        let userPosTop = browserHeight - item.dataset.showValue

        let itemPosTop = Math.trunc(getPosition(item) / 10) * 10

        function getPosition(item) {

            let clientRect = item.getBoundingClientRect()

            let top = clientRect.top + document.body.scrollTop

            return top
        }

        scrollTop(userPosTop, itemPosTop)

        function scrollTop(userPosTop, itemPosTop) {

            if (userPosTop >= itemPosTop) {

                item.classList.add("animateShow")

                if (item.classList.contains("floatUp")) {

                    item.style.animationName = "floatUp"
                } else if (item.classList.contains("floatDown")) {

                    item.style.animationName = "floatDown"
                } else if (item.classList.contains("floatLeft")) {

                    item.style.animationName = "floatLeft"
                } else if (item.classList.contains("floatRight")) {

                    item.style.animationName = "floatRight"
                } else {

                    item.style.animationName = "still"
                }
            } else if (browserHeight <= itemPosTop) {

                item.classList.remove("animateShow")

                item.style.animationName = "null"
            }
        }
    }
}