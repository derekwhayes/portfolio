const downArrow = document.querySelector('.down-arrow');

window.addEventListener('load', () => {
    console.log("EVENT TRIGGER");
    setTimeout(() => {
        downArrow.setAttribute('opacity', '1');
    }, 3000);
});