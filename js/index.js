function changeColor() {
    document.body.style.background = getComputedStyle(event.target).backgroundColor

    document.querySelectorAll('span').forEach(function
        (item) {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}