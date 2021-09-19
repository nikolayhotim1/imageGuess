'usestrict';
window.onload = init;

function init() {
    let images = document.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = 'img/' + image.id + '.jpg';
    image.src = name;

    setTimeout(hideAnswer, 3000);

    function hideAnswer() {
        name = 'img/' + image.id + 'blur.jpg';
        image.src = name;
    }
}
