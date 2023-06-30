const productContainers = Array.from(document.getElementsByClassName('product_container'));
const nxtBtn = Array.from(document.getElementsByClassName('next_btn'));
const preBtn = Array.from(document.getElementsByClassName('pre_btn'));

let index = 0;
for (const next_btn of nxtBtn) {
    const container = productContainers[index];
    next_btn.addEventListener("click", function () {
        container.scrollLeft += 150;
    });
    index ++;
}

index = 0;
for (const pre_btn of preBtn) {
    const container = productContainers[index];
    pre_btn.addEventListener("click", function () {
        container.scrollLeft -= 150;
    })
    index ++;
}