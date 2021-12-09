// Constants

const elementsToAnimate = document.getElementsByClassName("animate")

// Add styles

addStyles()

function addStyles() {
    const styles = `
    @keyframes floatUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 200px, 0);
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            
        }
    }
    @keyframes floatDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -200px, 0);
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes floatLeft {
        0% {
            opacity: 0;
            transform: translate3d(200px, 0, 0);
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes floatRight {
        0% {
            opacity: 0;
            transform: translate3d(-200px, 0, 0);
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes still {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .animate {
        opacity: 0;
        pointer-events: none;
    }
    .animateShow {
        opacity: 1;
        pointer-events: all;
        top: 0;
        animation-name: still;
    }
    .floatUp {}
    .floatDown {}
    .floatLeft {}
    .floatRight {}
    `

    const styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

window.addEventListener('resize', animateEls)
window.addEventListener("load", animateEls)
window.addEventListener("scroll", animateEls)

//ANIMATIONS

function animateEls() {

    for (const el of elementsToAnimate) {

        if (!el.dataset.showValue) el.dataset.showValue = "100"
        if (!el.dataset.time) el.dataset.time = "0.5"

        el.style.animationDuration = el.dataset.time + "s"

        const userTop = window.innerHeight - el.dataset.showValue

        const elTop = Math.trunc(el.getBoundingClientRect().top / 10) * 10

        if (userTop >= elTop) {

            el.classList.add("animateShow")

            if (el.classList.contains("floatUp")) {

                el.style.animationName = "floatUp"
                continue
            }
            if (el.classList.contains("floatDown")) {

                el.style.animationName = "floatDown"
                continue
            }
            if (el.classList.contains("floatLeft")) {

                el.style.animationName = "floatLeft"
                continue
            }
            if (el.classList.contains("floatRight")) {

                el.style.animationName = "floatRight"
                continue
            }

            el.style.animationName = "still"
            continue
        }

        if (window.innerHeight <= elTop) {

            el.classList.remove("animateShow")

            el.style.animationName = "undefined"
            continue
        }
    }
}