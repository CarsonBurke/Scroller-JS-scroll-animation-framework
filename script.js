/*CONSTANTS*/
let animateItems = document.getElementsByClassName("animate")
let browserHeight = window.innerHeight

addStyles()

function addStyles() {
    let styles = `
    .animate {
        opacity: 0;
        user-select: none;
        transition: all 0.3s ease-in-out;
        position: relative;
    }
    .floatUp {
        top: 80px;
    }
    .floatDown {
        top: -80px;
    }
    .floatLeft {
        left: 80px;
    }
    .floatRight {
        left: -80px;
    }
    .animateShow {
        opacity: 1;
        user-select: all;
        top: 0;
        left: 0;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

window.addEventListener("load", animateItem)

window.addEventListener("scroll", animateItem)

/*ANIMATION FUNCTION*/
function animateItem() {

    for (let item of animateItems) {

        if (!item.dataset.showValue) {

            item.dataset.showValue = "0"
        }

        if (!item.dataset.time) {

            item.dataset.time = "0.4s"
        }

        item.style.transition = "all " + item.dataset.time + "ease-in-out"

        let userPosTop = browserHeight - item.dataset.showValue
        let itemPosTop = getPosition(item)

        function getPosition(item) {

            let clientRect = item.getBoundingClientRect()
            let top = clientRect.top + document.body.scrollTop

            return top
        }

        scrollTop(userPosTop, itemPosTop)

        function scrollTop(userPosTop, itemPosTop) {

            if (userPosTop >= itemPosTop) {

                item.classList.add("animateShow")
            } else {

                item.classList.remove("animateShow")
            }
        }
    }
}