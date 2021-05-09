/*CONSTANTS*/
let animateItems = document.getElementsByClassName("animate")
let browserHeight = window.innerHeight

window.addEventListener("load", animateItem)
window.addEventListener("scroll", animateItem)

/*ANIMATION FUNCTION*/
function animateItem() {

    let styles = `
    .animateShow {
        opacity: 1;
        user-select: all;
        top: 0;
    }
    `

    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    for (let item of animateItems) {

        if (!item.dataset.showValue) {

            item.dataset.showValue = "0"
        }

        if (!item.dataset.type) {

            item.dataset.type = "floatUp"
        }

        switch (item.dataset.type) {

            case 1:

                1
                break

            case 2:

                2
                break

            case 3:

                3
                break

            default:

                4
        }

        if (!item.dataset.time) {

            item.dataset.time = "0.4s"
        }

        item.style.transition = "all " + item.dataset.time

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