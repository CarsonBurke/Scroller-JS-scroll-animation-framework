let animateItems = document.getElementsByClassName("animate")

for (let item of animateItems) {

    let positionTop = getPosition(item)

    function getPosition(item) {
        var clientRect = item.getBoundingClientRect();
        return {
            left: clientRect.left + document.body.scrollLeft,
            top: clientRect.top + document.body.scrollTop
        };
    }

    let userTop = 1

}