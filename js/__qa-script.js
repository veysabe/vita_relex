(function () { 

let accItem = document.getElementsByClassName('qa-block-answers__card');
let accHD = document.getElementsByClassName('qa-block-answers__heading');

for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'qa-block-answers__card close';
    }
    if (itemClass == 'qa-block-answers__card close') {
        this.parentNode.className = 'qa-block-answers__card open';
    }
}
})();